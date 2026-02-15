const { GoogleGenAI } = require("@google/genai");
const { temperature, maxTokens } = require("./config");
const { formatGeminiResponse } = require("./utils");

// All controllers will be defined here
const genAI = new GoogleGenAI({});

const helloController = (req, res) => {
    console.log(req.query);
    const { name } = req.query;
    res.status(200).json({ message: `Hello, ${name || 'World'}!` });
};

const datePlanerController = async (req, res) => {
    const { city, budget, dateType, partnerpersonality } = req.body;

// Date Planner Controller

        const prompt = `You are an expert date planner AI. Create an hour-by-hour date plan.
        Ensure the plan is realistic and enjoyable within the given constraints.
        City: ${city} 
        Budget: ${budget}
        Date Type: ${dateType}
        Partner Personality: ${partnerpersonality}
        
        RULES
        give output in JSON format`;
        
    

        const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
            temperature: temperature,
            maxTokens: maxTokens,
        },
    });
    console.log(response.text);
    

    res.status(200).json({
        message: 'Date planner created successfully!',
        city,
        budget,
        dateType,
        partnerpersonality,
        prompt,
        datePlan: formatGeminiResponse(response.text)
    });
};


module.exports = {
    helloController,
    datePlanerController
};