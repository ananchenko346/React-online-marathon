const upperCase = str => str.toUpperCase();
const tripleExclaim = str => str = `${str}!!!`;
const split = separator => str => str.split(separator);
const join = separator => xs => xs.join(separator);
const copy = str => `${str} `.repeat(2);

const createComposition = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const result = createComposition(
  copy,
  join(' '),
  split('_'),
  tripleExclaim,
  upperCase
);

console.log(result("by_ticket_now"));  //  BY TICKET NOW!!! BY TICKET NOW!!!
console.log(result("total sale")); //  TOTAL SALE!!! TOTAL SALE!!!

