/**
 * 타입변환
 */
let age = 32;
console.log(typeof age);

//명시적
let stringAge = age.toString();
console.log(typeof stringAge,stringAge);

//암묵적 -> 사용하지마라
let test = age + ''; //숫자에 문자를 더하면 문자타입이된다
console.log(typeof test, test);



//숫자타입으로 변환
console.log(typeof parseInt('-5'), parseInt('-5'));
console.log(typeof parseFloat('0.88'), parseFloat('0.88'));

console.log('-----------------------------')

/**
 * boolean   문자내용이 있으면 참
 */
console.log(!!'x');
console.log(!!'');
console.log(!!'0');
console.log(!!{}); //오브젝트 무조건 참
console.log(!![]); //리스트 무조건 참

console.log('-----------------------------')

/**
 * n진수에서 십진수로
 */

let binaryString  = '1001'; // 2진법으로 표현된 문자열
console.log(parseInt(binaryString , 2)) // 10진법으로 변환됨. 값은 9

let hexString = "A";   // 16진법으로 표현된 문자열
let decimalFromHex = parseInt(hexString, 16);  // 10진법으로 변환됨. 값은 10
console.log(decimalFromHex);

console.log('-----------------------------');

/**
 * 10진수에서 n진수로
 */
let decimalNumber = 15; // 10진수의 숫자
let binaryString1 = decimalNumber.toString(2);  // 2진수로 변환된 문자열, 값은 '1111'
console.log(typeof binaryString1,binaryString1); // string

console.log('-----------------------------');
/**
 * n진수에서 n진수로
 */
// 2진수에서 16진수로 ( 순서 : 2진수 -> 10진수 -> 16진수 )
let binary1 = '110010';
let hex1 = parseInt(binary1,2).toString(16); // 2진수 : 110010 -> 10진수 : 50 -> 16진수 : '32'
console.log(hex1);
// 16진수에서 2진수로 ( 순서 : 16진수 -> 10진수 -> 2진수)
let hex2 = 'e'; 
let binary2 = parseInt(hex2,16).toString(2); // 16진수 : e -> 10진수 : 14 -> 2진수 : '1110'
console.log(binary2);