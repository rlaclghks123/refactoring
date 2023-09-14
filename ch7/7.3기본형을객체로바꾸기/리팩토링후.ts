class Order {
  _priority: Priority;

  constructor(data: { priority: string }) {
    this._priority = new Priority(data.priority);
  }

  get priority() {
    return this._priority;
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }

  get priorityString() {
    return this._priority.toString();
  }
}

class Priority {
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
  _value;

  constructor(value: string | Priority) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}>는 유효하지 않은 우선순위 입니다`);
  }

  toString() {
    return this._value;
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }

  equals(other: Priority) {
    return this._index === other._index;
  }

  higherThan(other: Priority) {
    return this._index > other._index;
  }

  lowerThan(other: Priority) {
    return this._index < other._index;
  }
}

const client1 = () => {
  const orders = [
    { priority: 'high' },
    { priority: 'rush' },
    { priority: 'low' },
    { priority: 'normal' },
  ].map((o) => new Order(o));

  const highPriorityCount = orders.filter((o) =>
    o.priority.higherThan(new Priority('normal'))
  ).length;
  return highPriorityCount;
};

console.log(client1());
