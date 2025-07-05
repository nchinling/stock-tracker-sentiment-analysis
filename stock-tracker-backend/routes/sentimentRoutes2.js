import express from "express";
import OpenAI from "openai";

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.get("/:symbol", async (req, res) => {
    const { symbol } = req.params;
    const stock_symbol = symbol;
    console.log(symbol);

    try {
        // For demo, you might hardcode or fetch news/tweets about symbol
        const prompt = `Analyze the sentiment about stock symbol ${symbol}. Summarize if the sentiment is positive, negative, or neutral.`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
        });

        const sentiment = completion.choices[0].message.content;

        res.json({ success: true, sentiment });
    } catch (error) {
        console.error("OpenAI sentiment error:", error);
        res.status(500).json({ success: false, message: "Failed to get sentiment" });
    }
});

export default router;
