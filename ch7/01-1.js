class Organization {
  #name;
  #country;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  set name(aString) {
    return (this.#name = aString);
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  set country(aCountryCode) {
    return (this.#country = aCountryCode);
  }
}

let result = '';
const organization = new Organization({ name: '애크미 구스베리', country: 'GB' });

organization.name = '애그머니 블루베리';

result += `<h1>${organization.name}</h1>`;

console.log(result);
