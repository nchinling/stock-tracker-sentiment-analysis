function TotalProfitOrLoss({ totalProfitOrLoss }) {
    return (
        <header>
            <p>Percentage: {totalProfitOrLoss.percentagePnL?.toFixed(2)}%</p>
            <p>Profit or Loss: ${totalProfitOrLoss.profitOrLoss?.toFixed(2)}</p>
        </header>
    );
}

export default TotalProfitOrLoss;