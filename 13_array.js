/**
 * array 리스트
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() --> 어레이의 맨끝에 추가하고 길이를 반환
//iveMembers.push('아이유');
console.log(iveMembers.push('아이유')); // 길이를 반환
console.log(iveMembers);

console.log('-----------');

// pop() --> 마지막 값을 반환 하고 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('-----------');

// shift() --> 첫번째 값을 반환 하고 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('-----------');

// unshift() --> 첫번째 값을 추가하고 길이를 반환
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);


console.log('-----------');

// splice()---> 잘라낸값 반환 (인덱스번호,갯수)
console.log(iveMembers.splice(0,3))
console.log(iveMembers);

// 위의 기본함수는 원본값이 변한다 실무에서는 잘 쓰지않음

console.log('-----------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat() --> push()와 동작은 같지만 원본은 변하지 않음
console.log(iveMembers.concat('아이유'));
console.log(iveMembers);

console.log('-----------');

// slice() ---> (인덱스,인덱스+1) 원본은 변하지않음
console.log(iveMembers.slice(0,3));
console.log(iveMembers);

console.log('-----------');

// spread operator 원본은 변하지않음(다른메모리사용을 의미)
let iveMembers2 =[
    ...iveMembers,
];
console.log(iveMembers2);

console.log('-----------');

// join() ,기준으로 합쳐짐 하나의 스트링이다 -->어레이를 하나의 스트링으로
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort() 오름차순 정렬
console.log(iveMembers.sort());

// reverse() 내림차순 정렬
console.log(iveMembers.reverse());


console.log('-----------');

// map() 하나씩 순행해서 매핑해서 반환
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if( x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }    
    }));

console.log(iveMembers);

console.log('-----------');

// filter()
numbers = [1,8,7,6,3];
console.log(numbers.filter((x) => x % 2 === 0)); //짝수만 전부

// find()
console.log(numbers.find((x) => x % 2 === 0)); //무조건 처음것만

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); //무조건 처음것의 인덱스번호

// reduce() - 자주사용함
console.log(numbers.reduce((p, n) => p + n, 0)); //어레이 값 모두 더하기
