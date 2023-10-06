// 이름은 바뀌어도 id값은 바뀌면 안된다.  => id 세터를 제거
// 최초 id설정을 생성자에서 진행한다.
export class Person {
  #name = '';
  #id;

  constructor(id: string) {
    this.#id = id;
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  get id() {
    return this.#id;
  }
}
const martin = new Person('1234');
martin.name = 'Martin';
