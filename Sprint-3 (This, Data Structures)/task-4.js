class Student {
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }
  showFullName() {
    return this._fullName
  }
  nameIncludes(data) {
    if (this.showFullName().includes(data)) {
      return true
    } else {
      return false
    }
  }
  static studentBuilder() {
    return new Student('Ihor Kohut', 'qc')
  }
  get direction() {
    return this._direction
  }
  set direction(direction) {
    this._direction = direction
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();
console.log(stud3);
console.log(stud1.nameIncludes('Ivan'));   // true
console.log(stud1.nameIncludes('Denysenko')); // false

