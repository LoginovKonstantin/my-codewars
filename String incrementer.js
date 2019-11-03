function incrementString (str) {
    if (str === '') return "1";

    const fragment = str.match(/\d+$/) ? str.match(/\d+$/)[0] : '0';
    let intFragment = (parseInt(fragment) + 1).toString();
    const diff = fragment.length - intFragment.length;

    if (diff > 0) {
        for (let i = 0; i < diff; i++) intFragment = '0' + intFragment;
    }
    return str.replace(fragment, '') + intFragment;
}
