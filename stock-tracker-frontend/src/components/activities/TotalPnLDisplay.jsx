// Activity 7: Calculate and display total PnL (Entirely frontend activity)
// TotalProfitOrLoss.jsx;
// function TotalProfitOrLoss({ totalProfitOrLoss }) {
//   return (
//     <header>
//       <p>Percentage: {totalProfitOrLoss.percentagePnL?.toFixed(2)}%</p>
//       <p>Profit or Loss: ${totalProfitOrLoss.profitOrLoss?.toFixed(2)}</p>
//     </header>
//   );
// }

// export default TotalProfitOrLoss;

// -------------------------------------------------------------------------

// StockList.jsx
// 1.
// import TotalProfitOrLoss from "./TotalProfitOrLoss";

// 2.
// const [totalProfitOrLoss, setTotalProfitOrLoss] = useState({});

// 3.
//   useEffect(() => {
//     const calculateTotalPnL = () => {
//       let total = 0;
//       let totalCost = 0;
//       stocks.forEach((stock) => {
//         const { currentPrice, purchasePrice, quantity } = stock;
//         if (currentPrice != null && purchasePrice != null && quantity != null) {
//           total += (currentPrice - purchasePrice) * quantity;
//           totalCost += purchasePrice * quantity;
//         }
//       });
//       return {
//         profitOrLoss: total,
//         percentagePnL: totalCost ? (total / totalCost) * 100 : 0,
//       };
//     };

//     const total = calculateTotalPnL();
//     setTotalProfitOrLoss(total);
//   }, [stocks]);

// 3. Insert component
{
  /* <TotalProfitOrLoss totalProfitOrLoss={totalProfitOrLoss} /> */
}

// ------------------------------------------------------------------------------

// 4. Improved version for TotalProfitOrLoss.jsx
// function TotalProfitOrLoss({ totalProfitOrLoss }) {
//   return (
//     <header>
//       {totalProfitOrLoss.profitOrLoss !== undefined &&
//         totalProfitOrLoss.profitOrLoss !== null &&
//         totalProfitOrLoss.profitOrLoss !== 0 && (
//           <p
//             style={{
//               color: totalProfitOrLoss.profitOrLoss >= 0 ? "green" : "red",
//               fontWeight: "bold",
//             }}
//           >
//             {" "}
//             {totalProfitOrLoss.profitOrLoss >= 0 ? "▲" : "▼"}
//             {" $"}
//             {Math.abs(totalProfitOrLoss.profitOrLoss).toFixed(2)}
//             {" ("}
//             {Math.abs(totalProfitOrLoss.percentagePnL).toFixed(2)}
//             {"%)"}
//           </p>
//         )}
//     </header>
//   );
// }

// export default TotalProfitOrLoss;
