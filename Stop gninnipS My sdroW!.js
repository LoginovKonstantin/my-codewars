function spinWords(str){
    var result = "";
    str.split(" ").forEach((el, i) => {
        result += el.length > 4 ? el.split("").reverse().join("") : el;
        if(str.split(" ").length != i + 1)
            result += " ";
    })
    return result;
}
