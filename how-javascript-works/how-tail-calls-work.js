// classic recursion is generally not a tail call

function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
}