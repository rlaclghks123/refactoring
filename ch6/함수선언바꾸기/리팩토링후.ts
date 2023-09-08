import { BookInterface } from './리팩토링전';
import assert from 'assert';

class Book {
  _reservations: BookInterface[] = [];

  get reservation() {
    return this._reservations;
  }

  addReservation({ customer, isPriority }: BookInterface) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push({ customer, isPriority });
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ customer: 'roy', isPriority: true });
bookcafe.addReservation({ customer: 'jay', isPriority: false });
console.log(bookcafe.reservation);
