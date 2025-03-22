// Import dependencies
import { carDatabase } from './knowledge.js';
import { crawler } from './crawler.js';
import { generateResponse, enhanceResponse } from './llm.js';

// Chat state
let chatHistory = [];
let isProcessing = false;

// Initialize chat
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('user-input');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

// Send message function
export async function sendMessage() {
    if (isProcessing) return;

    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessageToChat('user', message);
    input.value = '';
    
    isProcessing = true;
    addLoadingIndicator();
    
    try {
        // Process the message and get response
        const response = await handleRuleBasedResponse(message);
        addMessageToChat('bot', response);
    } catch (error) {
        console.error('Error:', error);
        addMessageToChat('bot', 'Sorry, I encountered an error. Please try again.');
    } finally {
        removeLoadingIndicator();
        isProcessing = false;
    }
}

// Add message to chat
function addMessageToChat(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    // Format message content
    if (typeof message === 'object') {
        messageDiv.innerHTML = formatCarDetails(message);
    } else {
        messageDiv.textContent = message;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatHistory.push({ sender, message });
}

// Format car details for display
function formatCarDetails(car) {
    if (!car) return '';
    
    return `
        <div class="car-details">
            <h3>${car.name}</h3>
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <p><strong>Price:</strong> ${car.price.min} - ${car.price.max}</p>
            <p><strong>Type:</strong> ${car.type}</p>
            <p><strong>Brand:</strong> ${car.brand}</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                ${car.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <p><strong>Specifications:</strong></p>
            <ul>
                <li>Engine Options: ${car.specifications.engine.join(', ')}</li>
                <li>Power: ${car.specifications.power.join(', ')}</li>
                <li>Transmission: ${car.specifications.transmission.join(', ')}</li>
                <li>Mileage: ${car.specifications.mileage.join(', ')}</li>
            </ul>
        </div>
    `;
}

// Add loading indicator
function addLoadingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message bot loading';
    loadingDiv.id = 'loading-indicator';
    loadingDiv.textContent = 'Thinking...';
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove loading indicator
function removeLoadingIndicator() {
    const loadingDiv = document.getElementById('loading-indicator');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// Handle rule-based responses
function handleRuleBasedResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Help command
    if (lowerMessage.includes('help')) {
        return `I can help you with:
- Car prices and specifications
- Comparing different car models
- Information about car brands
- Fuel efficiency and mileage
- Safety features and ratings
Just ask me anything about cars in India!`;
    }
    
    // Check for car information
    for (const car of carDatabase.cars) {
        if (lowerMessage.includes(car.name.toLowerCase())) {
            return car;
        }
    }
    
    // Brand-related queries
    if (lowerMessage.includes('brands')) {
        return `Popular car brands in India include: ${carDatabase.brands.join(', ')}`;
    }
    
    // Type-related queries
    if (lowerMessage.includes('types')) {
        return `Common car types include: ${carDatabase.types.join(', ')}`;
    }
    
    // Fuel type queries
    if (lowerMessage.includes('fuel')) {
        return `Available fuel types: ${carDatabase.fuelTypes.join(', ')}`;
    }
    
    // Price range queries
    if (lowerMessage.includes('price') || lowerMessage.includes('budget')) {
        return `Cars are available in these price ranges: ${carDatabase.priceRanges.join(', ')}`;
    }
    
    // Default response
    return "I understand you're asking about cars. Could you please be more specific? You can ask about specific car models, prices, features, or say 'help' to see what I can do.";
}
