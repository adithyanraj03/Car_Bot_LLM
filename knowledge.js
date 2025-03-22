export const carDatabase = {
    cars: [
        {
            name: "Tata Nexon",
            brand: "Tata",
            type: "SUV",
            price: {
                min: "₹8.10 Lakh",
                max: "₹15.50 Lakh"
            },
            variants: [
                {
                    name: "XE",
                    price: "₹8.10 Lakh",
                    engine: "1.2L Revotron Petrol",
                    transmission: "Manual",
                    mileage: "17.01 kmpl"
                },
                {
                    name: "XZ+ (O) Dark Edition",
                    price: "₹15.50 Lakh",
                    engine: "1.5L Revotorq Diesel",
                    transmission: "Automatic",
                    mileage: "24.08 kmpl"
                }
            ],
            features: [
                "5-star Global NCAP rating",
                "Connected Car Technology",
                "Electric Sunroof",
                "Wireless Charging",
                "Auto Headlamps"
            ],
            specifications: {
                engine: ["1.2L Turbocharged Petrol", "1.5L Turbocharged Diesel"],
                power: ["120 PS", "110 PS"],
                torque: ["170 Nm", "260 Nm"],
                transmission: ["6-Speed Manual", "6-Speed AMT"],
                mileage: ["17.01-21.5 kmpl", "24.08 kmpl"],
                dimensions: {
                    length: "3993 mm",
                    width: "1811 mm",
                    height: "1606 mm",
                    wheelbase: "2498 mm"
                }
            },
            image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg"
        },
        {
            name: "Hyundai Creta",
            brand: "Hyundai",
            type: "SUV",
            price: {
                min: "₹10.87 Lakh",
                max: "₹19.20 Lakh"
            },
            variants: [
                {
                    name: "E",
                    price: "₹10.87 Lakh",
                    engine: "1.5L MPi Petrol",
                    transmission: "Manual",
                    mileage: "16.8 kmpl"
                },
                {
                    name: "SX (O) Knight",
                    price: "₹19.20 Lakh",
                    engine: "1.5L U2 CRDi Diesel",
                    transmission: "Automatic",
                    mileage: "21.4 kmpl"
                }
            ],
            features: [
                "Panoramic Sunroof",
                "Ventilated Seats",
                "10.25-inch Touchscreen",
                "BlueLink Connected Car Tech",
                "BOSE Premium Sound System"
            ],
            specifications: {
                engine: ["1.5L NA Petrol", "1.5L Turbocharged Diesel", "1.4L Turbo Petrol"],
                power: ["115 PS", "115 PS", "140 PS"],
                torque: ["144 Nm", "250 Nm", "242 Nm"],
                transmission: ["6-Speed Manual", "6-Speed AT", "7-Speed DCT"],
                mileage: ["16.8 kmpl", "21.4 kmpl", "16.8 kmpl"],
                dimensions: {
                    length: "4300 mm",
                    width: "1790 mm",
                    height: "1635 mm",
                    wheelbase: "2610 mm"
                }
            },
            image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter-5.jpeg"
        },
        {
            name: "Mahindra Thar",
            brand: "Mahindra",
            type: "SUV",
            price: {
                min: "₹13.59 Lakh",
                max: "₹16.29 Lakh"
            },
            variants: [
                {
                    name: "AX Opt",
                    price: "₹13.59 Lakh",
                    engine: "2.0L mStallion Petrol",
                    transmission: "Manual",
                    mileage: "15.2 kmpl"
                },
                {
                    name: "LX",
                    price: "₹16.29 Lakh",
                    engine: "2.2L mHawk Diesel",
                    transmission: "Automatic",
                    mileage: "17.2 kmpl"
                }
            ],
            features: [
                "4x4 with Manual Shift Transfer Case",
                "Adventure Statistics Display",
                "Drizzle-resistant 7-inch Touchscreen",
                "Built-in Roll Cage",
                "Washable Interior"
            ],
            specifications: {
                engine: ["2.0L Turbocharged Petrol", "2.2L Turbocharged Diesel"],
                power: ["150 PS", "130 PS"],
                torque: ["300 Nm", "300 Nm"],
                transmission: ["6-Speed Manual", "6-Speed AT"],
                mileage: ["15.2 kmpl", "17.2 kmpl"],
                dimensions: {
                    length: "3985 mm",
                    width: "1855 mm",
                    height: "1920 mm",
                    wheelbase: "2450 mm"
                }
            },
            image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg"
        }
    ],
    brands: ["Tata", "Hyundai", "Mahindra", "Maruti Suzuki", "Honda", "Toyota", "Kia"],
    types: ["SUV", "Sedan", "Hatchback", "MUV"],
    fuelTypes: ["Petrol", "Diesel", "CNG", "Electric"],
    priceRanges: [
        "Under ₹5 Lakh",
        "₹5-10 Lakh",
        "₹10-15 Lakh",
        "₹15-20 Lakh",
        "Above ₹20 Lakh"
    ]
};
