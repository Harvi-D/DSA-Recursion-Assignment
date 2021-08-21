/**
 * Return the nth fibonacci number
 * @param {integer} n
 */
function fibonacci(n) {
    //base cases
    if (n === 0) return 0;
    if (n === 1) return 1;
    //recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;
