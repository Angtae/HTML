// 덧셈 함수
function add(a,b) {
    return a + b;
}

// 뺄셈 함수
function subtract(a,b) {
    return a - b;
}
// 곱셈 함수
function multiply(a,b) {
    return a * b;
}
//나눗셈 함수
function divide(a,b) {
    if (b==0) {
        return "0으로 나눌 수 없습니다."
    }
    return a / b;
}
//출력 함수
function printScreen(text) {
    console.log(text);
}

printScreen("1. 2 + 3 = " + add(2, 3));
printScreen("2. 2 - 3 = " + subtract(2, 3));
printScreen("3. 2 * 3 = " + multiply(2, 3));
printScreen("4. 2 / 3 = " + divide(2, 3));
printScreen("5. 2 * 0 = " + multiply(2, 0));
printScreen("6. 2 / 0 = " + divide(2, 0));

// 다음 문제를 푸시오(함수를 호출해서 화면에 결과를 출력력)
//1. 2 + 3 = ?
//2. 2 - 3 = ?
//3. 2 * 3 = ?
//4. 2 / 3 = ?
//5. 2 * 0 = ?
//6. 2 / 0 = ?
//7. 6번의 오류를 해결하시오