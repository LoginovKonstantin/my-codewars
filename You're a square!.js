var isSquare = function(n) {
    return isInteger(Math.sqrt(n));
}
function isInteger(num) {
    return (num ^ 0) === num;
}
