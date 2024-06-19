/**
 * number type
 */
const age = 32;
const tempature = -20;
const pi = 3.14;

console.log(typeof age);


/**
 * string type
 */

const ive = `"'안유진',
아이브"`;
console.log(ive);



const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

/**
 * boolean type
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * object type
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};
console.log(dictionary);
console.log(dictionary['yellow']);

/**
 * array type
 * 
 * index 0 부터 할당
 */
const iveMember = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMember);

console.log(iveMember[3]);
console.log(iveMember[1]);

iveMember[0] = '김현정';
console.log(iveMember);






