const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const users = {};
let nextId = 1;

app.use(express.json());  // JSON 요청 파싱

app.get('/', (req, res) => {
    console.log('메인홈');
    try {
        res.sendFile(path.join(__dirname, 'public', 'users.html'));
    } catch (error) {
        console.error("파일 전송 오류:", error);
        res.status(500).send("메인 페이지 로드 실패");
    }
});

app.use(express.static('public'));

// 사용자 조회 라우트
app.get('/users', (req, res) => {
    console.log('사용자 조회');
    try {
        res.json(users);  // JSON으로 반환
    } catch (error) {
        console.error("사용자 조회 오류:", error);
        res.status(500).send("사용자 목록 조회 실패");
    }
});

// 사용자 생성 라우트
app.post('/users', (req, res) => {
    console.log('사용자 생성: ', req.body);
    try {
        const name = req.body.name;
        if (!name) {
            return res.status(400).send("이름을 입력하세요.");
        }
        users[nextId++] = name;
        res.status(201).send('사용자 생성 완료');
    } catch (error) {
        console.error("사용자 생성 오류:", error);
        res.status(500).send("사용자 생성 실패");
    }
});

// 사용자 수정 라우트
app.put('/users/:id', (req, res) => {
    console.log('사용자 수정');
    try {
        const id = req.params.id;
        if (!users[id]) {
            return res.status(404).send("해당 사용자가 존재하지 않습니다.");
        }
        users[id] = req.body.name;
        res.send('사용자 수정 완료');
    } catch (error) {
        console.error("사용자 수정 오류:", error);
        res.status(500).send("사용자 수정 실패");
    }
});

// 사용자 삭제 라우트
app.delete('/users/:id', (req, res) => {
    console.log('사용자 삭제:', req.params.id);
    try {
        const id = req.params.id;
        if (!users[id]) {
            return res.status(404).send("해당 사용자가 존재하지 않습니다.");
        }
        delete users[id];
        res.send('사용자 삭제 완료');
    } catch (error) {
        console.error("사용자 삭제 오류:", error);
        res.status(500).send("사용자 삭제 실패");
    }
});

app.listen(port, () => {
    console.log(`서버 레디 on ${port}`);
});


// 방법2.

// const express = require('express');
// const app = express();
// const port = 3000;

// // JSON 요청을 파싱하는 미들웨어 등록
// app.use(express.json());

// // 메모리 안에 사용자 저장 (DB 대체)
// let users = [];
// let userId = 1;

// // 🔥 사용자 생성 - POST /users
// app.post('/users', (req, res) => {
//     const user = {
//         id: userId++,         // 고유 id 자동 증가
//         name: req.body.name,  // 클라이언트가 보낸 이름
//         age: req.body.age     // 클라이언트가 보낸 나이
//     };
//     users.push(user);
//     res.status(201).json(user);  // 생성 완료 응답
// });

// // 🧾 사용자 조회 - GET /users
// app.get('/users', (req, res) => {
//     res.json(users);  // 모든 사용자 리스트 반환
// });

// // ✍ 사용자 수정 - PUT /users/:id
// app.put('/users/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const user = users.find(u => u.id === id);

//     if (!user) {
//         return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
//     }

//     user.name = req.body.name || user.name;
//     user.age = req.body.age || user.age;
//     res.json(user);  // 수정된 사용자 반환
// });

// // 🗑 사용자 삭제 - DELETE /users/:id
// app.delete('/users/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = users.findIndex(u => u.id === id);

//     if (index === -1) {
//         return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
//     }

//     users.splice(index, 1);
//     res.json({ message: '사용자가 삭제되었습니다.' });
// });

// // 💻 서버 실행
// app.listen(port, () => {
//     console.log(`서버 포트가 ${port} 에서 실행 중입니다.`);
// });