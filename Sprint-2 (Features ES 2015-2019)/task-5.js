const negate = x => -x;
const halve = x => x / 2;
const square = x => x * x;
const double = x => 2 * x;

const combineFunctions = (...funcs) => x => funcs.reduce((acc, fn) => fn(acc), x);

const combineOpt = combineFunctions(double, square, halve, negate);

console.log(withCompose(negate(), halve(), square()));
