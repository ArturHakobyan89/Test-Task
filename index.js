const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
  return cartItemsPrices.reduce((a,b) => +a + +b).toFixed(2) == WINNING_SUM
}

module.exports = doesCartWinPrize;
