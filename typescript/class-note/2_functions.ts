// 파라미터의 타입을 정의
// 함수의 반환값의 타입은 지정하지 않아서 타입 추론
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식 -> 가장 근본
function sum2(a: number, b: number): number {
  return a + b;
}

// JS의 파라미터
// function sum(a, b) {
//   return a + b;
// }

// sum(10, 20, 30, 40);
// 추가로 들어간 인자들은 무시됨!

sum2(10, 20, 30, 40); // 타입스크립트에선 에러가 뜸!

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {}

log("hello world");
log("hello ts", "abc");
log("namju", "noel", "yun");
