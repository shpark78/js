/**
 * 연산자
 * 
 */

console.log(10 + 10);
console.log(10 % 3); //나머지
console.log('---------');

/**
 * 증가와감소
 */

let number = 1;
number ++;
console.log(number);
number --;
console.log(number);

/**
 * 연산자의 위치
 */
let result = 0;
console.log(result);

result = number ++; // number 값을 resulst에 먼저대입후 증가
console.log(result, number);

result = number --; 
console.log(result, number);

result = ++ number; 
console.log(result, number);

result = -- number; 
console.log(result, number);

/**
 * 
 * 숫자타입이 아닌타입에 +,-사용
 */

let sample = '99';
console.log(+sample); //+붙일때만 타입이 number로 바뀜
console.log(typeof +sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample); //NaN 숫자가 아니다

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

/**
 * 비교 연산자
 * 값만 비교 == != 자바스크립트에서는 사용안함
 * 갑과 타입의 비교 === !==
 * 
 */

console.log(5 === 5);
console.log(5 === '5');
console.log(5 == '5');

console.log(5 != 5);
console.log(5 != '5');
console.log(5 != '5');

console.log('----------')

/**
 * 크기 비교
 */
console.log(100 > 1);

/**
 * 삼항 조건연산자   조건 ? true : false
 */
console.log(10 > 0 ? '10 이 0보다 크다' : '10이 0보다 작다');


/**
 * 논리연산자
 * && and
 * || or
 */
console.log(true && false);
console.log(true || false);

console.log('----------------');

/**
 * 단축평가 -->실무에서 많이사용 4가지조건 암기
 * 
 * &&사용시 좌측이 true 이면 우측값 반환
 * &&사용시 좌측이 false 이면 좌측값 반환
 * ||사용시 좌측이 true 이면 좌측값 반환
 * ||사용시 좌측이 false 이면 우측값 반환
 * 
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '걸프랜드');
console.log(false && '걸프랜드');

console.log(false && true && '걸프랜드'); // 좌측부터 2개씩 계산하면됨


/**
 * 지수연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name; //변수만 정의됨
console.log(name);

name = name ?? '성유리'; // ?? 좌측변수가 null,undefined 일때
console.log(name);

name = name ?? '아이유';
console.log(name); // 이미 성유리로 정의됨

name = '보라';
console.log(name);

let name2;
name2 ??= '김사랑'; // 단축해서 사용
console.log(name2);



