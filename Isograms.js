function isIsogram(str){
    let lowStr = str.toLowerCase();
    let flag = true;
    for(let i = 0; i < lowStr.length; i ++) {
        var a = 0;
        for(let j = 0; j < lowStr.length; j ++) {
            if(lowStr[i] === lowStr[j]) a++;
        }
        if(a > 1) flag = false;
    }
    return flag;
}
