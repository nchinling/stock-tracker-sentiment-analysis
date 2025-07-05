import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/SentimentPage.css";
const API_BASE_URL = "http://localhost:5000";

function SentimentPage() {
    const { symbol } = useParams();
    const [sentiment, setSentiment] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Extract summary or recommendation if available
    const extractRecommendation = (text) => {
        const lower = text.toLowerCase();
        if (lower.includes("buy")) return "Buy";
        if (lower.includes("sell")) return "Sell";
        if (lower.includes("hold") || lower.includes("neutral")) return "Hold";
        return "...";
    };

    const extractSentimentColor = (rec) => {
        switch (rec) {
            case "Buy":
                return "green";
            case "Sell":
                return "red";
            case "Hold":
                return "orange";
            default:
                return "gray";
        }
    };

    useEffect(() => {
        async function fetchSentiment() {
            setLoading(true);
            setError(null); // reset error before fetch
            try {
                const response = await fetch(`${API_BASE_URL}/api/sentiment/${symbol}`);
                const data = await response.json();
                if (data.success) {
                    setSentiment(data.sentiment);
                } else {
                    setError(data.message || "Failed to fetch sentiment");
                    setSentiment("");
                }
            } catch (err) {
                setError(err.message);
                setSentiment("");
            }
            setLoading(false);
        }

        fetchSentiment();
    }, [symbol]);

    const recommendation = extractRecommendation(sentiment);
    const color = extractSentimentColor(recommendation);

    return (
        <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
            <h2>
                🧠 Sentiment Analysis: <span style={{ color }}>{symbol}</span>
            </h2>

            <div style={{ marginBottom: "1rem" }}>
                <strong>📊 Recommendation:</strong>{" "}
                <span style={{ color, fontWeight: "bold", fontSize: "1.2rem" }}>
                    {recommendation}
                </span>
            </div>

            <div
                style={{
                    background: "#f9f9f9",
                    padding: "1rem",
                    borderRadius: "8px",
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.6",
                    boxShadow: "0 0 8px rgba(0,0,0,0.05)",
                    minHeight: "100px",
                }}
            >
                {loading && <p>Loading sentiment...</p>}
                {error && <p style={{ color: "red" }}>Error: {error}</p>}
                {!loading && !error && sentiment && <>{sentiment}</>}
            </div><br></br>

            <button className="back-button">
                <Link className="back-text"
                    to="/dashboard"
                >
                    ← Back to Dashboard
                </Link>
            </button>
        </div>
    );
}

export default SentimentPage;
