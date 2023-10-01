import { BirdType, BirdsType } from './리팩토링전';

class Bird {
  name: string = '';
  type: string = '';
  numberOfCoconuts?: number;
  isNailed?: boolean;
  voltage?: number;

  constructor(birdObj: BirdType) {
    Object.assign(this, birdObj);
  }

  get plumage() {
    return '알 수 없다';
  }

  get velocity(): number | null | undefined {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return '보통이다';
  }

  get velocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts && this.numberOfCoconuts > 2 ? '지침' : '보통';
  }

  get velocity() {
    return this.numberOfCoconuts && 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage && this.voltage > 100 ? '그을림' : '예쁨';
  }

  get velocity() {
    return this.isNailed ? 0 : this.voltage && 10 + this.voltage / 10;
  }
}

function craeteBird(bird: BirdType) {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

function plumages(birds: BirdsType) {
  return new Map(birds.map((b) => craeteBird(b)).map((bird) => [bird.name, bird.plumage]));
}

const speeds = (birds: BirdsType) => {
  return new Map(birds.map((b) => craeteBird(b)).map((bird) => [bird.name, bird.velocity]));
};

const birds = [
  { name: '유제', type: '유럽 제비' },
  { name: '아제1', type: '아프리카 제비', numberOfCoconuts: 2 },
  { name: '아제2', type: '아프리카 제비', numberOfCoconuts: 4 },
  { name: '파앵1', type: '노르웨이 파랑 앵무', isNailed: false, voltage: 3000 },
  { name: '파앵2', type: '노르웨이 파랑 앵무', isNailed: true, voltage: 50 },
];

console.log(...plumages(birds));
console.log(...speeds(birds));

export {};
