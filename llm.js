// Import required libraries
const { pipeline } = require('@xenova/transformers');

// Initialize the model
let model = null;
let isModelLoading = false;

// Function to load the model
async function loadModel() {
    if (model === null && !isModelLoading) {
        isModelLoading = true;
        try {
            // Load a smaller model suitable for car-related queries
            model = await pipeline('text-generation', 'Xenova/distilgpt2');
            console.log('Model loaded successfully');
        } catch (error) {
            console.error('Error loading model:', error);
            model = null;
        }
        isModelLoading = false;
    }
    return model;
}

// Function to generate response using the model
async function generateResponse(input, context) {
    try {
        const modelInstance = await loadModel();
        if (!modelInstance) {
            throw new Error('Model not loaded');
        }

        // Prepare prompt with context
        const prompt = `
Context: This is a car information chatbot. The query is about cars in India.
Previous context: ${context}
User query: ${input}
Response:`;

        // Generate response
        const result = await modelInstance(prompt, {
            max_length: 100,
            temperature: 0.7,
            top_p: 0.9,
            repetition_penalty: 1.2,
            stop: ['\n', 'User query:']
        });

        return result[0].generated_text.trim();
    } catch (error) {
        console.error('Error generating response:', error);
        return null;
    }
}

// Function to enhance response with car database
function enhanceResponse(llmResponse, userQuery) {
    // If LLM fails, fall back to rule-based responses
    if (!llmResponse) {
        return processMessage(userQuery);
    }

    // Combine LLM response with database information
    const lowerQuery = userQuery.toLowerCase();
    let enhancedResponse = llmResponse;

    // Add specific car details if mentioned
    carDatabase.cars.forEach(car => {
        if (lowerQuery.includes(car.name.toLowerCase())) {
            enhancedResponse += `\n\nSpecific details for ${car.name}:
- Price: ${car.price}
- Mileage: ${car.mileage}
- Engine: ${car.engine}
- Safety: ${car.safety}`;
        }
    });

    return enhancedResponse;
}

// Export functions
module.exports = {
    generateResponse,
    enhanceResponse
};
