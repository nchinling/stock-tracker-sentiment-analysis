import express from "express";
import OpenAI from "openai";
import yahooFinance from "yahoo-finance2";

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.get("/:symbol", async (req, res) => {
    const { symbol } = req.params;

    try {
        // Fetch recent news headlines from Yahoo Finance
        const result = await yahooFinance.search(symbol, { newsCount: 5 });
        const headlines = result.news
            ?.map((n) => `- ${n.title}`)
            .join("\n") || "No recent news found.";

        // Improved prompt with real context
        const prompt = `
Analyze the sentiment of the following recent news headlines about ${symbol}:

${headlines}

Summarize whether the overall sentiment is positive, neutral, or negative. Do not show the headlines. Just summarise them in about 50 words. Conclude with whether an investor should Buy, Sell, or Hold the stock based on this sentiment.
`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
        });

        const sentiment = completion.choices[0].message.content;

        res.json({ success: true, sentiment });
    } catch (error) {
        console.error("OpenAI sentiment error:", error);
        res
            .status(500)
            .json({ success: false, message: "Failed to fetch sentiment" });
    }
});


export default router;
