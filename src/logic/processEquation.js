export function replaceSqrt(str) {
    let res = str.slice();
    let matches = str.match(/√[0-9]*/g) || [];
    matches.forEach(match => {
        res = res.replace(match, (match.replace('√', 'Math.sqrt(') + ')'));
    });
    return res;
}

export function replaceExponent(str) {
    let res = str.slice();
    let matches = str.match(/pow\([0-9]|\|\+*,[0-9]*\)/g) || [];

    matches.forEach(match => {
        res = res.replace(match, 'Math.' + match);
    });
    return res;
}


export function replaceDivide(str) {
    let res = str.slice();
    let matches = str.match(/%/g) || [];

    matches.forEach(match => {
        res = res.replace(match, '/');
    });
    return res;
}
