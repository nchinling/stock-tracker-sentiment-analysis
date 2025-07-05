import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust the path to your .env relative to this file
const envPath = path.resolve(__dirname, "../.env"); // example: one level up

dotenv.config({ path: envPath });

import OpenAI from "openai";



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY


});

async function testOpenAI() {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: "Say hello!" }],
        });

        console.log("✅ OpenAI is working:", response.choices[0].message.content);
    } catch (err) {
        console.error("❌ Error with OpenAI:", err.message || err);
    }
}

testOpenAI();
