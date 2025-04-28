let memos = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("saveBtn").addEventListener("click", addMemo);
});

function addMemo() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const fileInput = document.getElementById("image");
    const file = fileInput.files[0];

    if (!title || !content) {
        alert("제목과 내용을 모두 입력해주세요.");
        return;
    }

    let imageUrl = "";
    if (file) {
        imageUrl = URL.createObjectURL(file);
    }

    memos.push({ title, content, imageUrl });
    renderMemos();

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    fileInput.value = "";
}

function renderMemos() {
    const memoList = document.getElementById("memoList");
    memoList.innerHTML = "";

    memos.forEach((memo, index) => {
        const memoDiv = document.createElement("div");
        memoDiv.className = "memo";

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.value = memo.title;
        titleInput.disabled = true;

        const contentInput = document.createElement("textarea");
        contentInput.value = memo.content;
        contentInput.disabled = true;

        let img;
        if (memo.imageUrl) {
            img = document.createElement("img");
            img.src = memo.imageUrl;
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            img.style.marginBottom = "10px";
            memoDiv.appendChild(img);
        }

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style.display = "none";

        const deleteImageContainer = document.createElement("div");
        deleteImageContainer.className = "checkbox-row";
        deleteImageContainer.style.display = "none"; // 초기에 안 보이게
        deleteImageContainer.style.alignItems = "center";
        deleteImageContainer.style.gap = "5px";
        deleteImageContainer.style.display = "flex"; // 체크박스랑 라벨 가로 정렬
        

        const deleteImageCheckbox = document.createElement("input")
        deleteImageCheckbox.type = "checkbox";
        deleteImageCheckbox.id = `deleteImage-${index}`;

        const deleteImageLabel = document.createElement("label");
        deleteImageLabel.htmlFor = deleteImageCheckbox.id;
        deleteImageLabel.textContent = " 이미지 삭제";
        
        deleteImageContainer.appendChild(deleteImageCheckbox);
        deleteImageContainer.appendChild(deleteImageLabel);

        const updateBtn = document.createElement("button");
        updateBtn.className = "update";
        updateBtn.textContent = "수정";

        const saveBtn = document.createElement("button");
        saveBtn.className = "save";
        saveBtn.textContent = "저장";
        saveBtn.style.display = "none";

        updateBtn.addEventListener("click", () => {
            titleInput.disabled = false;
            contentInput.disabled = false;
            fileInput.style.display = "block";
            deleteImageContainer.style.display = "block";
            updateBtn.style.display = "none";
            saveBtn.style.display = "inline-block";
        });

        saveBtn.addEventListener("click", () => {
            const newTitle = titleInput.value.trim();
            const newContent = contentInput.value.trim();
            const deleteImage = deleteImageCheckbox.checked;
            const newFile = fileInput.files[0];

            if (!newTitle || !newContent) {
                alert("제목과 내용을 모두 입력해주세요.");
                return;
            }

            let newImageUrl = memo.imageUrl;

            if (deleteImage) {
                newImageUrl = "";
            } else if (newFile) {
                newImageUrl = URL.createObjectURL(newFile);
            }

            memos[index] = {
                title: newTitle,
                content: newContent,
                imageUrl: newImageUrl
            };

            renderMemos(); // 재렌더링
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "삭제";
        deleteBtn.addEventListener("click", () => deleteMemo(index));

        memoDiv.appendChild(titleInput);
        memoDiv.appendChild(contentInput);
        memoDiv.appendChild(fileInput);
        memoDiv.appendChild(deleteImageContainer);
        memoDiv.appendChild(updateBtn);
        memoDiv.appendChild(saveBtn);
        memoDiv.appendChild(deleteBtn);

        memoList.appendChild(memoDiv);
    });
}

function deleteMemo(index) {
    if (confirm("정말 삭제하시겠습니까?")) {
        memos.splice(index, 1);
        renderMemos();
    }
}
