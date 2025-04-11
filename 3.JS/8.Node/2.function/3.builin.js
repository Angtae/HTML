const stringNumber = "42"; //42가 아니고 글자 사이

console.log(stringNumber + 2);

const number = parseInt(stringNumber)

console.log(number + 2);

console.log(typeof stringNumber);
console.log(typeof number);

const number2 = Number(stringNumber);
console.log(number2)
console.log(typeof number2)

const User = {
    name : 'Brian',
    age : 18
}
console.log(typeof User);

//불트인 함수
//setTimeout(function, delay(ms));
setTimeout(() => {
    console.log('1초 후에 출력됨');
}, 1000);

console.log('끝');

const timerID = setTimeout(() => {
   console.log('3초 후에 출력됨') 
}, 3000);

console.log('진짜 끝');
//console.log('타이머ID:', timerID);
clearTimeout(timerID);