function fibonacci(num) {
// your code here
	function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }

    let a = 0, b = 1;
    for (let i = 2; i < num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Test cases
console.log(fibonacci(1));  // Output: 0
console.log(fibonacci(5));  // Output: 3
console.log(fibonacci(10)); // Output: 34
console.log(fibonacci(50)); // Output: 7778742049 (large number but should be correctly handled by JavaScript)

}

module.exports = fibonacci;
