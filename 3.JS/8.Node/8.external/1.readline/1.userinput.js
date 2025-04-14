const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,   //표준 입력(키보드 입력)
    output: process.stdout  //표준 출력(콘솔 출력)
});


function userKeyboardInputHandler(input){
    console.log('입력한 답은 : ',input);

    const num = parseInt(input);

    if(!isNaN(num) && num > 0 && num < 10){
        for(let i = 1; i<=9; i++){
            console.log(`${num} * ${i} = ${num * i}`);
        }
    }else{
        console.log('1부터 9까지의 숫자를 입력하시오');
    }

    rl.close();
}

rl.question('구구단의 단을 입력하시요 : ', userKeyboardInputHandler);    
