// 1. Create calculatePnL.js
// function calculateIndPnL(stocks) {
//   return stocks.map((stock) => {
//     // destructure
//     const { currentPrice, purchasePrice, quantity } = stock;

//     const profitOrLoss =
//       currentPrice != null && purchasePrice != null && quantity != null
//         ? (currentPrice - purchasePrice) * quantity
//         : null;

//     // Consider doing percentage
//     const percentagePnL = (profitOrLoss / (purchasePrice * quantity)) * 100;

//     return {
//       ...stock, // use all properties from stock with spread operator. Recall: symbol, quantity, purchase price, current price
//       profitOrLoss,
//       percentagePnL,
//     };
//   });
// }

// export { calculateIndPnL };

// ------------------------------------------------------------------------------------------------------------

// 2. Modify fetch in stockRoutes.js

// Import function
// import { calculateIndPnL } from "../services/calculatePnL.js";

// Retrieve stock prices
// try {
//   const stockListWithPrices = await addStockListWithPrices(stocks);

//   // Activity 6: Calculate stock PnL
//   const stockListWithPnLandPrices = calculateIndPnL(stockListWithPrices);
//   res.json({
//     success: true,
//     stocks: stockListWithPnLandPrices,
//   });
// } catch (error) {
//   res.status(500).json({
//     success: false,
//     message: "Failed to fetch stock prices",
//   });
// }
