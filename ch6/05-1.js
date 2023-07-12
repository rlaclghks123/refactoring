import assert from 'assert';

class Book {
  _reservations = [];

  get reservation() {
    return this._reservations;
  }

  addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ name: 'roy' });
bookcafe.addReservation({ name: 'jay' });
console.log(bookcafe.reservation);
