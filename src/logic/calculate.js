import Big from "big.js";

import operate from "./operate";
import isNumber from "./isNumber";
import {replaceDivide, replaceExponent, replaceSqrt} from "./replaceSqrt";

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

const calculatorMap = {
    'AC': 'AC',
    'backspace': 'backspace',
    '': '',
};

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

    if (isNumber(buttonName)) {
        if (buttonName === "0" && obj.next === "0") {
            return {};
        }
        // If there is an operation, update next
        if (obj.operation) {
            if (obj.next) {
                return {next: obj.next + buttonName};
            }
            return {next: buttonName};
        }
        // If there is no operation, update next and clear the value
        if (obj.next) {
            const next = obj.next === "0" ? buttonName : obj.next + buttonName;
            return {
                next,
                total: null,
            };
        }
        return {
            next: buttonName,
            total: null,
        };
    }

    if (buttonName === "%") {
        if (obj.operation && obj.next) {
            const result = operate(obj.total, obj.next, obj.operation);
            return {
                total: Big(result)
                    .div(Big("100"))
                    .toString(),
                next: null,
                operation: null,
            };
        }
        if (obj.next) {
            return {
                next: Big(obj.next)
                    .div(Big("100"))
                    .toString(),
            };

        }
        return {};
    }

    if (buttonName === ".") {
        if (obj.next) {
            // ignore a . if the next number already has one
            if (obj.next.includes(".")) {
                return {};
            }
            return {next: obj.next + "."};
        }
        return {next: "0."};
    }

    if (buttonName === "=") {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            // '=' with no operation, nothing to do
            return {};
        }
    }

    if (buttonName === "+/-") {
        if (obj.next) {
            return {next: (-1 * parseFloat(obj.next)).toString()};
        }
        if (obj.total) {
            return {total: (-1 * parseFloat(obj.total)).toString()};
        }
        return {};
    }

    // Button must be an operation

    // When the user presses an operation button without having entered
    // a number first, do nothing.
    // if (!obj.next && !obj.total) {
    //   return {};
    // }

    // User pressed an operation button and there is an existing operation
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    // no operation yet, but the user typed one

    // The user hasn't typed a number yet, just save the operation
    if (!obj.next) {
        return {operation: buttonName};
    }

    // save the operation and shift 'next' into 'total'
    // return {
    //     total: obj.next,
    //     next: null,
    //     operation: buttonName,
    // };
    // save the operation and shift 'next' into 'total'
    return {
        total: obj.next,
        next: obj.next + buttonName,
        operation: buttonName,
    };
}

const calc = (expr) => {
    console.log(expr);
    try {
        return eval(replaceDivide(replaceExponent(replaceSqrt(expr)))).toString().substr(0, 15).trim();
    } catch (e) {
        alert('invalid expression');
        console.log(e);
        return expr;
    }
};
