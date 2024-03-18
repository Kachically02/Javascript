// A program thatconverts USD to NGN
const usdToNgnRate = 1600;

function convertUsdToNgn(usdAmount) {
    return usdAmount * usdToNgnRate;
}

// Usage
const usdAmount = 1000; // Amount in USD
const ngnAmount = convertUsdToNgn(usdAmount);
console.log(`${usdAmount} USD is equal to ${ngnAmount} NGN.`);