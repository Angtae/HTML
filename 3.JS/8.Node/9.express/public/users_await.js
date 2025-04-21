document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const userTable = document.getElementById('userTable');

    // 최초 페이지가 호출될때, 백엔드에 데이터 요청.
    updateTable();

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = username.value;
        console.log('생성할 이름: ', name);

        try {
            const res = await fetch('/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name })
            });

            if (!res.ok) throw new Error('사용자 생성 실패');

            username.value = '';  // 입력칸 비우기
            await updateTable();  // 테이블 갱신
        } catch (error) {
            alert('사용자 생성 중 오류 발생');
            console.error(error);
        }
    });

    // 버튼을 만들고, 콜백함수 등록하는 함수
    function createButton(text, clickHandler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    }

    async function updateTable() {
        userTable.innerHTML = '';  // 이전 내용 삭제

        try {
            const res = await fetch('/users');
            if (!res.ok) throw new Error('데이터 조회 실패');

            const users = await res.json();

            for (const key in users) {
                const row = document.createElement('div');
                row.innerHTML = `
                    <strong>ID:</strong> ${key},
                    <strong>Name:</strong> ${users[key]}
                `;

                row.appendChild(createButton('수정', () => editUser(key)));
                row.appendChild(createButton('삭제', () => deleteUser(key)));

                userTable.appendChild(row);
            }
        } catch (error) {
            console.error('목록 불러오기 실패:', error);
            alert('목록 불러오기 실패');
        }
    }

    async function editUser(userId) {
        const newName = prompt('수정할 이름을 입력하세요.');
        if (!newName) return alert('이름을 입력해야 수정됩니다.');

        try {
            const res = await fetch(`/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName })
            });

            if (!res.ok) throw new Error('수정 실패');

            alert('수정 성공');
            await updateTable();
        } catch (error) {
            console.error('수정 중 오류:', error);
            alert('수정 중 오류 발생');
        }
    }

    async function deleteUser(userId) {
        const confirmDelete = confirm('정말로 삭제하시겠습니까?');
        if (!confirmDelete) {
            alert('장난치지 마시오...');
            return;
        }

        try {
            const res = await fetch(`/users/${userId}`, {
                method: 'DELETE'
            });

            if (!res.ok) throw new Error('삭제 실패');

            await updateTable();
            alert('삭제 성공');
        } catch (error) {
            console.error('삭제 중 오류:', error);
            alert('삭제 중 오류 발생');
        }
    }
});
