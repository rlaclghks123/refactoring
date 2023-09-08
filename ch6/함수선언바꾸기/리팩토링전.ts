export interface BookInterface {
  customer: string;
  isPriority?: boolean;
}

class Book {
  _reservations: BookInterface[] = [];

  get reservation() {
    return this._reservations;
  }

  addReservation(customer: BookInterface) {
    this._reservations.push(customer);
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ customer: 'roy' });
bookcafe.addReservation({ customer: 'jay' });
console.log(bookcafe.reservation);
