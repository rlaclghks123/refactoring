// name 필드를 title로 수정

export interface Props {
  title: string;
  country: string;
}

class Organization {
  #title;
  #country;

  constructor(data: Props) {
    this.#title = data.title;
    this.#country = data.country;
  }

  get title() {
    return this.#title;
  }

  set title(aString) {
    this.#title = aString;
  }

  get country() {
    return this.#country;
  }

  set country(aCountry) {
    this.#country = aCountry;
  }
}
const organization = new Organization({ title: '애크미 구스베리', country: 'GB' });

console.log(organization.title);
organization.title = '치맨';
console.log(organization.title);

console.log(organization.country);
organization.country = '한국';
console.log(organization.country);
