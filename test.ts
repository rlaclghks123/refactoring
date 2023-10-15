// interface RecordTest {
//   title: string;
// }

// type NumOrStr = number | string;
// type Random = 'Hi' | 'Hello' | 'Bye';

// const recordTest: Record<Random, RecordTest> = {
//   Hi: { title: '4' },
//   Hello: { title: 'about' },
//   Bye: { title: 'about' },
// };

// interface PickTest {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type PickType = Pick<PickTest, 'title' | 'description'>;
// const pickTest: PickType = {
//   title: 'hi',
//   description: 'hi',
// };

// interface OmitTest {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type OmitType = Omit<OmitTest, 'title'>;

// const omitTest: OmitType = {
//   // title:'asd',
//   description: 'hi',
//   completed: true,
// };

// type excludeTestType = Exclude<'title' | 'description' | 'completed', 'title'>;

// type excludeTest2Type = Exclude<OmitTest, 'title'>;

// /////////

// //  extends로 제네릭 제약 걸기
// interface Test<T> {
//   name: string;
//   age: T;
// }

// const test1: Test<number> = {
//   name: 'chiman',
//   age: 5,
// };

// const test2: Test<string> = {
//   name: 'chiman',
//   age: 'Guess',
// };

// interface Test2<T extends number> {
//   name: string;
//   age: T;
// }

// const test3: Test2<number> = {
//   name: 'chiman',
//   age: 5,
// };

// // const test4: Test2<string> = {
// //   name: 'chiman',
// //   age: 'Guess',
// // };

// // inter

// type E1<T> = T extends (infer E)[] ? E : never;
// type Str = E1<string[]>;

// // 컨디셔널 타입
// type 사람 = {
//   name: string;
//   age: number;
// };

// type 도그 = {
//   name: string;
//   dog: boolean;
// };

// // 타입제조기
// type isDog<T> = T extends '나쁜사람' ? 도그 : 사람;

// type 치환 = isDog<'착한사람'>;
// type 조두순 = isDog<'나쁜사람'>;

//////

const a = 0;
const b = a || 3;
console.log(b); // 3  => a가 falsy값이므로

const t = false;
const te = t && 3;
const tes = t ?? 3;

console.log('te : ', te); // te : 3
console.log('tes : ', tes); // tes : false

const c = 0;
const d = c ?? 3;
console.log(d); // 0 => null 병합 연산자는 null, undefined일때만 넘어감

const g = undefined;
const h = g ?? 3;

const i = null;
const j = i ?? 3;

console.log(h); // 3
console.log(j); // 3

let count = 0;
console.log(count || `<div>'하이'</div>`); // `<div>'하이'</div>`);

let count2 = 0;
console.log(count ?? `<div>'하이'</div>`); // 0

let test3 = undefined;
console.log(test3?.d);

let test4 = null;
console.log(test4?.d);
if (test4) console.log(test4.d);

let test5 = undefined;
console.log(test5?.[0] ?? '반가워요');

// [
//     [1],
//     [1,2],
//     [1,2,3],
//     [1,2,3,4],
//     [1,2,3,4,5]
// ]

// *
// **
// ***

function example1() {
  console.log(this); // this는 any
}

function example2(this: Window) {
  console.log(this); // this:Window
}

function example3(this: Document, a: string, b: 'this') {
  console.log(this, 'hello', 'this');
}


example3('ㅁㄴ', 'this'); // 'void' 형식의 'this' 컨텍스트를 메서드의 'Document' 형식 'this'에 할당할 수 없습니다.

example3.call(document,'ㅁㄴ','this');

function cbTest(cb:(num:number, str:string)=>void){};

cbTest((num,str)=>{});
cbTest(() => {});
cbTest(() => true); // void이므로 결과값 무시
cbTest(() => 5125); // void이므로 결과값 무시

// function cbTest(cb:(num?:number, str?:string)=>void){}; 콜백함수는 옵셔널?로 만들면 안된다.


function narrowFn(x: string): number {
  return 0;
}
type wideType = (x: string) => string | number 
let nwtest:wideType = narrowFn; // 문제없음 

// narrow -> wide에 대입가능,  T<narrow 반환값> -> T<Wide 반환값> -> 공변성 


function wideFn(x: string): string | number  {
  return 0;
}

type narrowType = (x: string) => string;

let nwtest2: narrowType = wideFn; // 문제발생 // narrow -> wide에 대입가능,  T<narrow 반환값> -> T<Wide 반환값>
