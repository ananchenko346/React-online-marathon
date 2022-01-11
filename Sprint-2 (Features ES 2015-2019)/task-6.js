let students = [{
  name: 'Anna',
  languages: ['English', 'Ukrainian'],
  age: 21
}, {
  name: 'Bob',
  languages: ['Polish', 'Spanish'],
  age: 26
}, {
  name: 'Alice',
  languages: ['Italian', 'Russian'],
  age: 18
}]

const getLanguages = (arr, condition) => {
  return arr.reduce(function (acc, curr) {
    return (!condition) ? acc.concat(curr.languages) : condition(curr) ? acc.concat(curr.languages) : acc.concat([]);
  }, []);
};

console.log(getLanguages(students, (student) => student.age < 26));
// should return ['English', 'Ukrainian',  'Italian', 'Russian']

console.log(getLanguages(students, (student) => student.name === 'Alice'));
// should return ['Italian', 'Russian']

console.log(getLanguages(students));
// should return ['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Russian']


