function gugudan() {
    console.log('=== 구구단 ===');
    for (let dan = 1; dan <= 9; dan++) {
        console.log(`--- ${dan}단 ---`);
        for (let i = 1; i <= 9; i++) {
            console.log(`${dan} x ${i} = ${dan * i}`);
        }
    }
}

gugudan();