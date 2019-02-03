// classic recursion is generally not a tail call

function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);               // not a tail call
}

// Recursive function as a tail call

function factorial(n, result = 1) {
    if (n < 2) {
        return result;
    }
    return factorial(n - 1, n * result)        // tail call
}