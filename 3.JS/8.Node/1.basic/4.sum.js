function sum_to_num(number) {
    // 주어진 숫자까지의 합산을 for 문으로 구현하시오
    let sum = 0;
    for (let i=1; i <= number; i++) {
        sum += i;
    }
    console.log(`${number}까지의 합산은:, ${sum}`);
}

sum_t0_num(1000000);