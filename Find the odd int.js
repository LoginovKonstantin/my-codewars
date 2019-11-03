function findOdd(a) {
    var result;
    for(var i = 0; i < a.length; i++) {
        var current = a[i];
        if(a.filter(el => el === current).length % 2 != 0) {
            result = current;
            break;
        }
    }
    return result;
}
