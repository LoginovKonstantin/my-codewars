function tribonacci(signature,n){
    if(n == 1) return [1];
    if(n == 0) return [];
    let newArr = signature;
    for(let i = 0; i < n - 3; i++) {
        var a = 0;
        for(let j = newArr.length - 3; j < newArr.length; j++)
            a += newArr[j];
        newArr.push(a);
    }
    return newArr;
}
