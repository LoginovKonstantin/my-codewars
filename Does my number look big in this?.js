function narcissistic(value) {
    const power = value.toString().length;
    return value == value.toString().split('').reduce((prev, cur) => {
        return Math.pow(+cur, power) + prev;
    }, 0);
}
