function duplicateEncode(word){
    var result = "";
    var arr = word.toLowerCase().split("");
    for(var i = 0; i < arr.length; i++) {
        if(isOnce(arr, arr[i])) {
            result += "(";
        } else if(isTwice(arr, arr[i])) {
            result += ")";
        }
    }
    return result;
}

function isOnce(arr, sym) {
    return arr.filter(el => el === sym).length < 2;
}

function isTwice(arr, sym) {
    return arr.filter(el => el === sym).length > 1;
}
