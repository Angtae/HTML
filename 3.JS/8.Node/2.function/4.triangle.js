function leftTriangle() {
    const ROWS = 5;
    let currentRow = 1;
    while (currentRow <= ROWS) { // while 이든 for 이든 상관없음. 그러나 while이 더 직관적임
        let stars = "";
        let starCount = 1;
        while (starCount <= currentRow) {
            stars += "*";
            starCount++;
        }
        console.log(stars);
        currentRow++
    }
}

leftTriangle();