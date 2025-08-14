# 📈 Stock Tracker with Sentiment Analysis App

This application allows you to track stocks and receive sentiment analysis based on news articles related to specific stock symbols.

The app integrates with the Yahoo Finance API (yfinance) to gather the latest news and leverages the OpenAI API to analyze and generate sentiment insights. This provides users with a quick and intuitive understanding of the market sentiment toward any given stock.

---

## 🔧 Features

- Track individual stocks by symbol (e.g., AAPL, TSLA)
- Fetch sentiment analysis from backend API
- Classify sentiment as Buy, Sell, or Hold with color-coded recommendations
- Simple, clean user interface
- 💾 Save stock trades in an SQL database  
- 🔍 Fetch current stock prices using the Yahoo Finance API  
- 🧮 Calculate individual and total profit/loss of your investments  
- 🗑️ Delete unwanted trades from your watchlist

---

## 🛠️ Tech Stack

- **Frontend**: React+Vite
- **Backend**: Node.js with Express  
- **Database**: SQL  
- **API**: Yahoo Finance API, OpenAI API

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nchinling/stock_tracker.git
cd dft-stock-tracker

```

### 2. Install libraries

```bash
cd stock-tracker-frontend
npm install

cd stock-tracker-backend
npm install

```

### 3. Create database

```bash
CREATE DATABASE stock_tracker;
USE stock_tracker;


# Create “users” table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

# Insert values into “users” table
INSERT INTO users (name, email) VALUES
('Ling', 'ling@gmail.com');

# Create “stocks” table
CREATE TABLE stocks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    symbol VARCHAR(10) NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

# Create “transactions” table
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stock_id INT NOT NULL,
    quantity INT NOT NULL,
    purchase_price DECIMAL(10,2) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (stock_id) REFERENCES stocks(id) ON DELETE CASCADE
);
```

### 4. Create environment variables

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=<mysql password>
DB_NAME=stock_tracker 

```

### 5. Run frontend 

```bash
cd stock-tracker-frontend
npm run dev

```

### 6. Run backend 

```bash
cd stock-tracker-backend
npx nodemon run server.js

```

---