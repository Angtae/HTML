// 메모를 저장할 배열 생성
// 각 메모는 { title: '제목', content: '내용' } 형식으로 저장됨
let memos = [];

// HTML 문서가 모두 로드된 후 실행되는 이벤트
// 이 안에서 버튼 이벤트를 연결해야 HTML 요소들이 존재함
document.addEventListener("DOMContentLoaded", () => {
    // 저장하기 버튼(id: saveBtn)에 클릭 이벤트 연결
    document.getElementById("saveBtn").addEventListener("click", addMemo);
});

// 메모 추가 함수
function addMemo() {
    // 제목과 내용 입력란에서 값을 가져와 공백을 제거함
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    // 제목 또는 내용이 비어있으면 경고창 출력 후 중단
    if (!title || !content) {
        alert("제목과 내용을 모두 입력해주세요.");
        return;
    }

    // 새 메모를 배열에 추가
    memos.push({ title, content });

    // 화면에 메모 목록 다시 그리기
    renderMemos();

    // 입력 필드 초기화
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

// 메모들을 화면에 출력하는 함수
function renderMemos() {
    // 메모를 표시할 부모 요소 가져오기
    const memoList = document.getElementById("memoList");

    // 기존 내용을 초기화
    memoList.innerHTML = "";

    // memos 배열을 순회하면서 각 메모를 DOM에 추가
    memos.forEach((memo, index) => {
        // 메모 전체를 감쌀 div 생성
        const memoDiv = document.createElement("div");
        memoDiv.className = "memo";

        // 제목을 입력받을 input 요소 생성
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.value = memo.title;   // 기존 제목 입력
        titleInput.disabled = true;      // 처음에는 비활성화 (읽기 전용)

        // 내용을 입력받을 textarea 요소 생성
        const contentInput = document.createElement("textarea");
        contentInput.value = memo.content; // 기존 내용 입력
        contentInput.disabled = true;      // 처음에는 비활성화

        // 수정 버튼 생성
        const updateBtn = document.createElement("button");
        updateBtn.className = "update";
        updateBtn.textContent = "수정";

        // 저장 버튼 생성 (처음엔 숨겨둠)
        const saveBtn = document.createElement("button");
        saveBtn.className = "save";
        saveBtn.textContent = "저장";
        saveBtn.style.display = "none";

        // '수정' 버튼 클릭 시 입력 필드를 활성화하고, '저장' 버튼 표시
        updateBtn.addEventListener("click", () => {
            titleInput.disabled = false;
            contentInput.disabled = false;
            updateBtn.style.display = "none";    // 수정 버튼 숨기기
            saveBtn.style.display = "inline-block"; // 저장 버튼 보이기
        });

        // '저장' 버튼 클릭 시 입력값을 저장하고 다시 비활성화
        saveBtn.addEventListener("click", () => {
            const newTitle = titleInput.value.trim();
            const newContent = contentInput.value.trim();

            // 입력값이 비어 있으면 경고
            if (!newTitle || !newContent) {
                alert("제목과 내용을 모두 입력해주세요.");
                return;
            }

            // memos 배열에 새로운 값 저장
            memos[index] = { title: newTitle, content: newContent };

            // 화면 다시 그리기
            renderMemos();
        });

        // 삭제 버튼 생성
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "삭제";

        // 삭제 버튼 클릭 시 해당 메모 삭제
        deleteBtn.addEventListener("click", () => deleteMemo(index));

        // 생성한 요소들을 메모 div에 추가
        memoDiv.appendChild(titleInput);
        memoDiv.appendChild(contentInput);
        memoDiv.appendChild(updateBtn);
        memoDiv.appendChild(saveBtn);
        memoDiv.appendChild(deleteBtn);

        // 메모 div를 메모 리스트에 추가
        memoList.appendChild(memoDiv);
    });
}

// 메모 삭제 함수
function deleteMemo(index) {
    // 사용자에게 삭제 확인 메시지 출력
    if (confirm("정말 삭제하시겠습니까?")) {
        // 해당 인덱스의 메모를 배열에서 제거
        memos.splice(index, 1);

        // 화면을 다시 그림
        renderMemos();
    }
}

