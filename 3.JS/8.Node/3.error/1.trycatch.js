// 일반 참조 오류 예시
try {
    const result = someVarialbeName * 2;
} catch (error) {
    console.error('오류 발생:', error.message);
}

console.log('keep going');

// 참조 오류 분류 예시
try {
    const result = someVarialbeName * 2;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log('참조 오류 발생:', error.message);
    } else {
        console.log('그 외 다른 오류:', error.message);
    }
}

// 문법 오류 예시
try {
    eval("alert('Hello'"); // 괄호 일부러 닫지 않음 → SyntaxError 발생
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('문법 오류:', error.message);
    } else {
        console.log('그 외 오류:', error.message);
    }
}

// 범위 오류 예시
try {
    let arr = new Array(-1);
} catch (error) {
    if (error instanceof RangeError) {
        console.log('범위 오류 발생:', error.message);
    } else {
        console.log('그 외 오류:', error.message);
    }
}

// 사용자 정의 오류 함수
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('숫자를 입력하시오');
    }
    if (a.toString().length > 2 || b.toString().length > 2) {
        throw new RangeError('2자리 숫자만 입력하시오');
    }
    if (b === 0) {
        throw new Error('0으로 나눌 수 없습니다.');
    }
    return a / b;
}

// divide 함수 호출 예제
try {
    const a = 15;
    const b = 0;
    const result = divide(a, b);
    console.log('결과:', result);
} catch (error) {
    console.log('오류 발생:', error.message);
}
