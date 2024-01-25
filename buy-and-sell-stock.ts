/*
* You are given an array prices where prices[i] is the price of a given stock on the ith day.
* You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
* Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
function maxProfit(prices: number[]): number {
    let min : number = prices[0];
    let profit : number = 0;
    for (var i = 1, l = (prices.length - 1); i <= l; i++) {
        const v : number = prices[i];
        if (v < min) { min = prices[i]; }
        else profit = Math.max(profit, (v - min));
    }
    return profit;
};