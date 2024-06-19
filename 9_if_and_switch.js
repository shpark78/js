/**
 * if and switch
 */

let number = 5;

if (number % 2 === 0){
    console.log('number 변수는 짝수입니다');
}else{
    console.log('number 변수는 홀수입니다');
}


if (number % 2 === 0){
    console.log('2의배수입니다');
} else if (number % 3 === 0){
    console.log('3의배수입니다');
} else if (number % 4 === 0){
    console.log('4의배수입니다');
} else{
    console.log('아무것도아니다');
}


const englishDay = 'saturday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;        
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default: // 해당 없을때 if문의 else
        koreanDay = '주말';
        break;        
}

console.log(koreanDay);