// 1. addStockPrices.js in service folder
// import yahooFinance from "yahoo-finance2";

// // Takes a list of stocks and returns a new list with current prices added
// async function addStockListWithPrices(stocks) {
//   try {
//     const symbolsArray = stocks.map((stock) => stock.symbol);

//     const prices = await yahooFinance.quote(symbolsArray);

//     // Create JavaScript object {key(symbol):value(price)}
//     const priceMap = Array.isArray(prices)
//       ? Object.fromEntries(prices.map((p) => [p.symbol, p.regularMarketPrice]))
//       : { [prices.symbol]: prices.regularMarketPrice };

//     // Append price to stock list
//     const stockListWithPrices = stocks.map((stock) => ({
//       ...stock, // copy original stock object
//       currentPrice: priceMap[stock.symbol] || null,
//     }));

//     return stockListWithPrices;
//   } catch (error) {
//     console.log(`Yahoo finance error: ${error.message}`);
//     throw new Error(error.message || "Failed to fetch stock prices");
//   }
// }

// export default addStockListWithPrices;

// ---------------------------------------------------------------------------

// 2. Add to FetchStocks in stockRoutes.js

// Import function
// import addStockListWithPrices from "../services/addStockPrices.js";

// Retrieve stock prices
// try {
//   const stockListWithPrices = await addStockListWithPrices(stocks);

//   res.json({
//     success: true,
//     stocks: stockListWithPrices
//   });
// } catch (error) {
//   res.status(500).json({
//     success: false,
//     message: "Failed to fetch stock prices",
//   });
// }
