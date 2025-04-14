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

const ROWS = 5;
function leftTriangle2() {
    for (let r = 1; r <= ROWS; r++){
        let stars = ""
        for ( let c = 1; c <= r; c++){
            // console.log('*');
            stars += "*";
        }
        console.log(stars);
    }
    // console.log('*');
    // console.log('**');
    // console.log('***');
    // console.log('****');
    // console.log('*****');
}
console.log('===========');
leftTriangle2();

function invertedLeftTriangle3(rows = ROWS) { 
    for ( let i = rows; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}
console.log('===========');
invertedLeftTriangle3();

function rightTriangle(rows = 5) {
    for ( let i = 1; i <= rows; i++) {
        console.log(''.repeat(rows-i) + '*'.repeat(i));
    }
}
console.log('===========');
rightTriangle();