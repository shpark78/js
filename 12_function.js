/**
 * 함수 -> 중복제거
 */

function calculate(){
    console.log((3 * 10 / 2 % 3).toString());
}
//calculate();


function calculate(number){ //파라미터 -입력받는값의 정의
    console.log((number * 10 / 2 % 3).toString());
}
calculate(4); //아규먼트 -실제입력값
calculate(5);

function multiply(x, y){
    console.log(x * y);
}
multiply(2,4);


function multiply(x, y = 10){
    console.log(x * y);
}
multiply(2,4);
multiply(2);

/**
 * return
 * 반환받기
 */
function multiply(x, y){
    return x * y;
}
const result1 = multiply(2,4);
console.log(result1);

const result2 = multiply(6,4);
console.log(result2);

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y;

}
console.log(multiply2(3,4));

const multiply3 = (x, y) => x * y; //간략화
console.log(multiply3(4,5));

// 함수이름정하지 않고 바로실행
(function(x,y){
    console.log(x * y);
})(3,4);
console.log('----------------------')


console.log(typeof multiply);
console.log(multiply instanceof Object); //함수는 오브젝트이다