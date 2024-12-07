document.addEventListener('DOMContentLoaded', () => {
  const stockData = [
    { symbol: "AAPL", name: "Apple Inc.", price: 175.64 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 146.98 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 134.76 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 252.34 },
    { symbol: "MSFT", name: "Microsoft Corporation", price: 330.22 },
    { symbol: "NFLX", name: "Netflix Inc.", price: 427.89 },
    { symbol: "META", name: "Meta Platforms Inc.", price: 305.67 },
    { symbol: "NVDA", name: "NVIDIA Corporation", price: 496.53 },
    { symbol: "BRK.B", name: "Berkshire Hathaway Inc.", price: 355.42 },
    { symbol: "V", name: "Visa Inc.", price: 242.15 },
  ];

  const dowElement = document.getElementById('dow');
  const sp500Element = document.getElementById('sp500');
  const rollingStocks = document.getElementById('rollingStocks');
  const stockInput = document.getElementById('stockInput');
  const searchButton = document.getElementById('searchButton');
  const resultElement = document.getElementById('result');

  // Mock ticker values
  dowElement.textContent = `Dow: 34856.92`;
  sp500Element.textContent = `S&P 500: 4567.89`;

  // Rolling stock display (with continuous animation)
  rollingStocks.innerHTML = stockData.map(stock => `<span class="stock-ticker">${stock.symbol}: $${stock.price}</span>`).join(' • ');

  // Search functionality with voice feedback
  function searchStock() {
    const input = stockInput.value.trim().toUpperCase();
    const stock = stockData.find(item => item.symbol.toUpperCase() === input || item.name.toUpperCase().includes(input));
    
    if (stock) {
      const resultText = `${stock.name} (${stock.symbol}): $${stock.price.toFixed(2)}`;
      resultElement.textContent = resultText;
      resultElement.style.fontWeight = 'bold'; // Highlight the result

      // Text-to-Speech with support check
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(resultText);
        speechSynthesis.speak(utterance);
      } else {
        console.log("Text-to-Speech not supported");
      }
    } else {
      const errorText = 'Stock not found. Please try another symbol or name.';
      resultElement.textContent = errorText;
      resultElement.style.fontWeight = 'normal'; // Remove highlight for error

      // Text-to-Speech with support check
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(errorText);
        speechSynthesis.speak(utterance);
      } else {
        console.log("Text-to-Speech not supported");
      }
    }
  }

  // Add event listeners
  searchButton.addEventListener('click', searchStock);

  // Allow pressing "Enter" to trigger search
  stockInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      searchStock();
    }
  });
});
