function createPhoneNumber(numbers){
    return numbers.reduce((prev, cur, idx) => {
        if (idx === 3) return prev + ') ' + cur;
        if (idx === 6) return prev + '-' + cur;
        return prev + cur;
    }, '(')
}
