"use strict";
exports.__esModule = true;
/**
 *
 * Generics allow us to parametrize types in the same way that functions parameterize values
 */
function wrappedValue(x) {
    return {
        value: x
    };
}
function wrappedValue2(x) {
    return {
        value: x
    };
}
var val = { value: [] };
val.value;
var stringFilter = function (val) { return typeof val === 'string'; };
//stringFilter(0) // error!
stringFilter("abc");
// but can be used with any value
var truthyFilter = function (val) { return val; };
truthyFilter(0); // false
truthyFilter(1);
truthyFilter(["abc"]);
truthyFilter(""); // false
