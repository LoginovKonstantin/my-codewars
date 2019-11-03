// Node.js 10.4.0 has BigInt support
function sumStrings(a,b) {
    return (BigInt(a ? a : 0) + BigInt(b ? b : 0)).toString();
}

function sumStrings(a,b) {
    const diff = a.length - b.length;
    const balance =  new Array(diff > 0 ? diff : diff * -1).fill(0).join('');
    const firstString = diff < 0 ? balance + a : a;
    const secondString = diff > 0 ? balance + b : b;

    let inMemory = 0, res = '';

    for(let i = firstString.length - 1; i >= 0; i--) {
        let sum = +firstString[i] + +secondString[i] + inMemory;
        if (sum > 9) {
            inMemory = Math.floor(sum / 10);
            sum = sum % 10;
        } else {
            inMemory = 0;
        }
        res += (sum);
    }
    res += inMemory > 0 ? inMemory : '';
    return res.split('').reverse().join('').replace(/^0*/, '');
}

console.log(sumStrings('50095301248058391139327916261',
                       '81055900096023504197206408605'));

console.log(~~4)
