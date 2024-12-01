// Mock stock data for demonstration
const mockStockData = {
    AAPL: { name: 'Apple Inc.', price: 150.25, change: '+1.2%' },
    TSLA: { name: 'Tesla Inc.', price: 600.85, change: '-0.5%' },
    MSFT: { name: 'Microsoft Corp.', price: 310.10, change: '+0.8%' },
    AMZN: { name: 'Amazon.com Inc.', price: 3400.50, change: '+0.3%' },
    GOOG: { name: 'Alphabet Inc.', price: 2800.20, change: '+0.5%' },
    META: { name: 'Meta Platforms Inc.', price: 330.40, change: '-1.0%' },
    NVDA: { name: 'NVIDIA Corp.', price: 700.60, change: '+2.4%' },
    NFLX: { name: 'Netflix Inc.', price: 500.75, change: '+1.8%' },
    BABA: { name: 'Alibaba Group', price: 210.10, change: '-0.7%' },
    DIS: { name: 'Walt Disney Co.', price: 185.30, change: '+0.6%' }
};

// Mock data for stock indexes (Nasdaq, S&P 500, Dow Jones)
const mockIndexData = {
    NASDAQ: '14,980.00 (+1.15%)',
    SP500: '4,450.00 (+0.95%)',
    DOW: '34,950.00 (+0.85%)'
};

function updateTicker() {
    const ticker = document.getElementById('ticker');
    
    // Simulating the rolling ticker with mock data
    const tickerText = `
        NASDAQ: ${mockIndexData.NASDAQ} | 
        S&P 500: ${mockIndexData.SP500} | 
        DOW JONES: ${mockIndexData.DOW}
    `;
    
    ticker.innerHTML = `<span>${tickerText}</span>`;
}

function searchStock() {
    const userInput = document.getElementById('stockInput').value.trim().toUpperCase();
    const stockDetails = document.getElementById('stockDetails');

    if (!userInput) {
        stockDetails.innerHTML = '<p>Please enter a stock name or ticker symbol.</p>';
        return;
    }

    // Mock stock data lookup
    const stock = mockStockData[userInput];

    if (stock) {
        stockDetails.innerHTML = `
            <p><strong>Name:</strong> ${stock.name}</p>
            <p><strong>Price:</strong> $${stock.price}</p>
            <p><strong>Change:</strong> ${stock.change}</p>
        `;
    } else {
        stockDetails.innerHTML = '<p>Stock not found. Try tickers like AAPL, TSLA, or MSFT.</p>';
    }
}

// Attach event listeners for both click and Enter key
document.getElementById('searchButton').addEventListener('click', searchStock);
document.getElementById('stockInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchStock();
    }
});

// Update the ticker every 30 seconds (to simulate real-time data)
setInterval(updateTicker, 30000);
