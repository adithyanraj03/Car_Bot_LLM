import axios from 'axios';
import cheerio from 'cheerio';

class CarDataCrawler {
    constructor() {
        this.sources = [
            'https://www.cardekho.com',
            'https://www.carwale.com',
            'https://www.zigwheels.com'
        ];
        this.cache = new Map();
        this.lastUpdate = null;
    }

    async fetchCarData(carModel) {
        try {
            // Check cache first
            if (this.cache.has(carModel) && 
                Date.now() - this.cache.get(carModel).timestamp < 24 * 60 * 60 * 1000) {
                return this.cache.get(carModel).data;
            }

            const results = await Promise.all(this.sources.map(source => 
                this.crawlSource(source, carModel)
            ));

            // Combine and deduplicate results
            const combinedData = this.combineResults(results);
            
            // Update cache
            this.cache.set(carModel, {
                data: combinedData,
                timestamp: Date.now()
            });

            return combinedData;
        } catch (error) {
            console.error('Error fetching car data:', error);
            return null;
        }
    }

    async crawlSource(source, carModel) {
        try {
            const response = await axios.get(`${source}/search?q=${encodeURIComponent(carModel)}`);
            const $ = cheerio.load(response.data);
            
            // Extract car information based on website structure
            const carInfo = {
                name: '',
                price: '',
                specs: {},
                features: [],
                images: []
            };

            // Website-specific selectors
            if (source.includes('cardekho')) {
                carInfo.name = $('.gsc_col-xs-12 h1').text();
                carInfo.price = $('.price span').text();
                // Add more selectors for other data
            } else if (source.includes('carwale')) {
                carInfo.name = $('.o-dZxBBD h1').text();
                carInfo.price = $('.o-eZTujG').text();
                // Add more selectors for other data
            }

            return carInfo;
        } catch (error) {
            console.error(`Error crawling ${source}:`, error);
            return null;
        }
    }

    combineResults(results) {
        // Filter out null results and combine data
        const validResults = results.filter(result => result !== null);
        if (validResults.length === 0) return null;

        // Combine and deduplicate data
        const combined = {
            name: validResults[0].name,
            price: this.getMostFrequent(validResults.map(r => r.price)),
            specs: {},
            features: [],
            images: []
        };

        // Combine specs and features from all sources
        validResults.forEach(result => {
            Object.assign(combined.specs, result.specs);
            combined.features.push(...result.features);
            combined.images.push(...result.images);
        });

        // Remove duplicates from arrays
        combined.features = [...new Set(combined.features)];
        combined.images = [...new Set(combined.images)];

        return combined;
    }

    getMostFrequent(arr) {
        return arr.sort((a,b) =>
            arr.filter(v => v === a).length - arr.filter(v => v === b).length
        ).pop();
    }

    // Method to update the cache periodically
    async updateCache() {
        const now = Date.now();
        if (!this.lastUpdate || now - this.lastUpdate > 12 * 60 * 60 * 1000) {
            // Update cache every 12 hours
            for (const [carModel] of this.cache) {
                await this.fetchCarData(carModel);
            }
            this.lastUpdate = now;
        }
    }
}

export const crawler = new CarDataCrawler();
