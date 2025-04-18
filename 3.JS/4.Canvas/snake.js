
const GAME_SPEED = 200; // ms (화면 갱신 주기)
const BLOCK_SIZE = 20;
let snake = {x:0, y:0} //뱀의 시작 위치치

// DOM 과 각종 필요한 여러 컴포넌트 로딩이 끝난 이후 이거 실행
window.onload = initialize;

function initialize() {
canvas = document.getElementById('snakeCanvas');
context = canvas.getContext('2d');

//키 이벤트 리스너 추가
setupEventListener();

//게임 시작 루프 호출
setInterval(gameLoop,GAME_SPEED);
}

// 여기는 키보드 인터럽트 핸들러
function setupEventListener() {
    
}

function gameLoop() {
    // 뱀 이동
    moveSnake();

    //화면에 랜더링
    draw();
}

// 뱀의 위치를 이동한다
function moveSnake() {
    snake.x += BLOCK_SIZE
   //snake.y += BLOCK_SIZE

   // 화면을 벗어나지 않게...오른쪽 끝 -> 왼쪽 끝에서 나오기 (vice versa) 반대 위로로<->아래
}

//화면에 뱀을 그린다
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'blue';
    context.fillRect(snake.x, snake.y, BLOCK_SIZE, BLOCK_SIZE);
}