import { Data } from './리팩토링전';

class Organization {
  _name: string;
  _country: string;

  constructor(data: Data) {
    this._name = data.name;
    this._country = data.country;
  }

  set name(aString: string) {
    this._name = aString;
  }

  get name() {
    return this._name;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode: string) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({ name: '애크미 구스베리', country: 'GB' });
organization.name = '애그머니 블루베리';

let result = '';
result += `<h1>${organization.name}</h1>`;

console.log(result);
