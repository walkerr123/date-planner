require('dotenv').config();

const configEnv = {
    geminiApiKey: process.env.GEMINI_API_KEY,
    temperature: 0.7,
    maxTokens: 2000
};

module.exports = configEnv;