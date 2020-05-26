function add(n) {
    function fn(x) {
        return add(n + x)
    }
    fn.valueOf = () => n;
    return fn;
}
