// perfect solve
function snail3(array) {
    const res = [];
    while(array.length) {
        res.push(...array.shift());
        array.forEach(el => res.push(el.pop()));
        array.reverse().forEach(el => el.reverse())
    }
    return res;
}

// my first solve
function snail(a) {
    const res = [];
    const count = a.length * 2 - 1;
    const length = a.length;
    if(length === 0) return [];
    if(a[0].length === 0) return [];

    let horizontalRightStart = 0,
        horizontalRightEnd = length,
        horizontalRightCount = 0,

        verticalDownStart = 1,
        verticalDownEnd = length,
        verticalDownCount = length - 1,

        horizontalLeftStart = length - 1,
        horizontalLeftEnd = 0,
        horizontalLeftCount = length - 1,

        verticalUpStart = length - 1,
        verticalUpEnd = 1,
        verticalUpCount = 0;
    for(let c = 0; c < count; c++) {

        for(let i = horizontalRightStart; i < horizontalRightEnd; i++) {
            res.push(a[horizontalRightCount][i])
        }
        horizontalRightCount++;
        horizontalRightStart++;
        horizontalRightEnd--;

        for(let i = verticalDownStart; i < verticalDownEnd; i++) {
            res.push(a[i][verticalDownCount])
        }
        verticalDownStart++;
        verticalDownEnd--;
        verticalDownCount--;

        for(let i = horizontalLeftStart - 1; i > horizontalLeftEnd - 1; i--) {
            if(horizontalLeftCount > -1) {
                const t = a[horizontalLeftCount][i];
                res.push(a[horizontalLeftCount][i])
            }

        }
        horizontalLeftStart--;
        horizontalLeftEnd++;
        horizontalLeftCount--;

        for(let i = verticalUpStart - 1; i > verticalUpEnd - 1; i--) {
            if(verticalUpCount > -1)
                res.push(a[i][verticalUpCount])
        }
        verticalUpStart--;
        verticalUpEnd++;
        verticalUpCount++;

    }
    return res;
}
