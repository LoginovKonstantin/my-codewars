function findOutlier(integers){
    const oddIdx = [];
    const evenIdx = [];
    integers.forEach((el, i) => {
        if (el % 2 === 0) evenIdx.push(i);
        else oddIdx.push(i);
    })
    return integers[oddIdx.length > 1 ? evenIdx.pop() : oddIdx.pop()];
}
