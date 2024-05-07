//* Programming Challenge: Simple Currency Converter
//*
//? Write a function to convert an amount from one currency to another using static exchange rates.
//* Requirements:
//? Write a function named convertCurrency that takes three parameters: amount, fromCurrency, and toCurrency.
//? Use a fixed object to store exchange rates relative to a base currency (e.g., USD).
//? The function should return the converted amount in the target currency.
//? Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.

const rates = {
  USD: 1, // Base currency
  EUR: 0.9, // 1 USD = 0.9 EUR
  GBP: 0.8, // 1 USD = 0.8 GBP
  INR: 82, // 1 USD = 74 INR
};

// 1 USD = 0.8
//      ? =  100
const convertCurrency = (amount, fromCurrency, toCurrency) =>{
    let amounInUSD = 0;
    if(fromCurrency !== "USD")
        {
    amounInUSD = amount / rates[fromCurrency]
        } else {
            amounInUSD = amount;
        }
        let convertAmount = 0;
        if(toCurrency !== "USD"){
           convertAmount =  amounInUSD *rates[toCurrency];

        } else {
            convertAmount = amountInUSD;;
        }
        return convertAmount;
};

// Example usage:
console.log(convertCurrency(100, "GBP", "EUR")); // Output will depend on the rates provided
