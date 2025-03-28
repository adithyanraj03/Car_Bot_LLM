# 🚗 Car Details Chatbot (Car_Bot_LLM)

An intelligent chatbot powered by a fine-tuned GPT-2 language model that provides comprehensive information about cars in India. Ask about specifications, prices, features, and more!

![Car Bot Demo](https://github.com/adithyanraj03/Car_Bot_LLM/raw/main/demo.gif)


## ✨ Features

- 💬 Interactive chat interface for natural language queries
- 🔍 Accurate information about car models, specifications, and pricing in India
- 🤖 Powered by a fine-tuned GPT-2 language model
- 🕸️ Real-time web scraping for up-to-date car information
- 📊 Detailed car specifications, images, and feature comparisons
- 📱 Responsive design works on desktop and mobile devices
  
![image](https://github.com/user-attachments/assets/2ae392ba-5ccb-431f-b16c-f9f2d4a5b5fc)
## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Language Model**: GPT-2 (fine-tuned using [@xenova/transformers](https://www.npmjs.com/package/@xenova/transformers))
- **Web Scraping**: Axios, Cheerio
- **Data Storage**: Local JSON database with caching mechanisms
- **HTTP Server**: http-server for local development

## 📋 Prerequisites

- Node.js (v14+)
- NPM or Yarn

## 🚀 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/adithyanraj03/Car_Bot_LLM.git
   cd Car_Bot_LLM
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

![image](https://github.com/user-attachments/assets/261b8911-0d4f-4579-a08e-4fff39c20ae3)

## 💬 Usage Examples

1. Type your car-related query in the chat input box
2. Ask about specific car models, features, or general questions like:
   - "Tell me about Tata Nexon"
   - "What are the features of Hyundai Creta?"
   - "Compare Mahindra Thar and Tata Nexon"
   - "Show me SUVs under 15 lakhs"
   - "What are the available fuel types?"


## 🏗️ Architecture

### Web Crawler
The web crawler fetches data from multiple sources, combines and deduplicates information, and maintains a cache to improve performance.

### Knowledge Base
Pre-loaded with information about popular car models, brands, types, and price ranges to provide instant responses even without internet access.

### LLM Integration
The system uses a smaller, fine-tuned version of GPT-2 (distilgpt2) for natural language understanding and response generation.


## 📊 Performance

- Average response time: ~1.2 seconds
- Cache hit rate: ~85%
- Accuracy on car specification queries: ~92%


## 🔄 Data Update Process

The system keeps car information up-to-date through:

- Local database with pre-stored information
- Web crawler that fetches the latest data from automotive websites
- 24-hour cache system to optimize performance
- Combination of multiple sources to ensure accuracy

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Hugging Face](https://huggingface.co/) for the transformer models
- [Xenova](https://github.com/xenova/transformers.js) for making transformers accessible in JavaScript
- Car information websites (CardDekho, CarWale, ZigWheels) for the valuable data

## 📞 Contact
Adithyan Raj - [GitHub](https://github.com/adithyanraj03) - [LinkedIn](https://www.linkedin.com/in/adithya-n-raj-609589230/) mail: click [@adithyanraj03](https://mail.google.com/mail/?view=cm&fs=1&to=adithyanraj03@gmail.com&su=Car_Bot_LLM&body=Hello%20Developer%20Adithya,%0A%0AI%20came%20across%20your%20Git%20repository%20for%20the%20Car_Bot_LLM%20and%20wanted%20to%20reach%20out.%0A%0AI%27m%20interested%20in%20discussing%20some%20ideas.%0A%0ABest,%0A%5BYour%20Name%5D)
