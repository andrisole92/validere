import {replaceDivide, replaceExponent, replaceSqrt} from "./processEquation";

export default function calculate(obj, buttonName) {

    switch (buttonName) {
        case 'oil':
            return obj;
        case 'z':
            return obj;
        case 'AC':
            return {
                ...obj,
                total: null,
                next: '',
                operation: null,
            };
        case 'backspace':
            return {
                ...obj,
                total: null,
                next: obj.next.substring(0, obj.next.length - 1),
                operation: null,
            };
        case 'pow':
            return {
                ...obj,
                total: null,
                next: obj.next + 'pow(',
                operation: null,
                operator: 'pow'
            };
        case '=':
            console.log(obj.next);
            return {
                ...obj,
                next: calc(obj.next).toString(),
            };
        case '':
            console.log(obj.next);
            return {
                ...obj,
                next: calc(obj.next).toString(),
            };
        default:
            if (obj.next.length > 14) {
                alert('max expression length us 15');
                return obj;
            }
            return {
                ...obj,
                next: obj.next + buttonName,
            }

    }

}

const calc = (expr) => {
    console.log(expr);
    try {
        return eval(replaceDivide(replaceExponent(replaceSqrt(expr)))).toString().substr(0, 15).trim();
    } catch (e) {
        alert('invalid expression');
        return expr;
    }
};
