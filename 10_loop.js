/**
 * 반복문
 * for
 * while
 */
for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log('-----------')

for(let i = 10; i >= 0; i--){
    console.log(i);
}

console.log('-----------')

for(let i = 1; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(i,j,i*j);
    }
}

console.log('-----------');

// 6*6정사각형
let square = '';
let side = 6;

for(let i =0; i < side; i++){
    for(let j = 0; j < side; j++){
        square += '* ';
    }
    square += '\n';
    //console.log(square);
}
console.log(square);

console.log('-----------');
/**
 * for in --> 오브젝트 key 값만제공 value 접근제공하지않는다
 * 리스트(어레이)사용
 */

const yuJin = {
    name: '안유진',
    year: 2003,
}
for(let key in yuJin){
    console.log(key);
}
console.log('-----------');

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for(let key in iveMembersArray){
    //console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`); //인덱스를 이용해 값가져오기
}
console.log('-----------');

/**
 * for of 리스트(어레이)에서 사용할수있다, 값을 읽음
 */
for(let value of iveMembersArray){
    console.log(value);
}
console.log('-----------');

/**
 * while
 * do while -먼저실행하고 조건을 본다 -> 실무에서 사용안한다
 */
let number = 0;
while(number < 10){
    console.log(number);
    number ++;
}
//console.log(number);
console.log('-----------');

/**
 * break 조건이후로 정지
 */
for (let i = 0; i < 10; i++){
    if (i === 5){
        break;
    }
    console.log(i);
}
console.log('-----------');

number = 0;
while(number < 10){
    if(number === 5){
        break;
    }
    number++;
    console.log(number);
}
console.log('-----------');

/**
 * continue 조건 맞으면 바로 다음으로
 */

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}
console.log('-----------');


number = 0;
while(number < 10){
    number++;
    if(number === 5){
        continue;
    }
    console.log(number);
}

