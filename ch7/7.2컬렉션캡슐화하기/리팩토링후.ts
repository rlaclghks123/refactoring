import { COURSES, CourseInfo } from './리팩토링전';

class Person {
  _name = '';
  _courses: Course[] = [];
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get courses() {
    return [...this._courses];
  }

  // 추가
  addCourse(aCourse: Course) {
    this._courses.push(aCourse);
  }

  // 추가
  removeCourse(
    aCourse: Course,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

class Course {
  _name = '';
  _isAdvanced = false;
  constructor(name: string, isAdvanced: boolean) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

const readBasicCourseNames = (filename: Record<string, CourseInfo>) =>
  Object.values(filename).map((c) => c.basic);

const client1 = () => {
  const aPerson = new Person('파울러');

  for (const name of readBasicCourseNames(COURSES)) {
    aPerson.addCourse(new Course(name, false));
  }

  return aPerson;
};

console.log(client1());
