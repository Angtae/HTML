const express = require('express');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');
const path = require('path');
const session = require('express-session');

const app = express();

// 미들웨어
app.use(morgan('dev'));
app.use(express.json());    // req.body 안에 프론트엔드에서 보낸 json이 담긴다.
app.use(session({
    secret: 'password1234',
    resave: false,  // 변경 없어도 저장 할거냐
    saveUninitialized: false    // 초기화 안된것도 저장 할거냐
}));

// 정적 파일 제공
app.use(express.static('public'));

// db 연결
// const db = new sqlite3.Database('database.db');
const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.log('DB연결 실패');
    } else {
        console.log('DB연결 성공');
        // sqlite 에서도 외래키 기능을 활성화 한다.
        db.run('PRAGMA foreign_keys = ON');
    }
});

function loginRequired (req, res, next) {
    if (!req.session || !req.session.user) {
        return res.status(401).json({error: '로그인이 필요합니다'});
    };
    next();
};

// 메인 API -->
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM user WHERE email=?';
    db.get(query, [email], (err, user) => {
        if (err || !user || user.password !== password) {   // 나중에는 bcrypt 로 암호화 된 걸로 비교해야함
            return res.status(401).json({'error': '로그인에 실패했습니다.'});
        }
        // 로그인 성공시 내가 원하는것 세션에 저장하기 뭘? 내가 원하는것
        req.session.user = {id: user.id, username: user.username, email: user.email};
        res.json({message: '로그인 성공'});
    });
});

app.post('/api/logout', loginRequired, (req, res) => {
    req.session.destroy(() => {
        res.json({message: '로그아웃 성공'});
    });
});

app.get('/api/tweets', (req, res) => {
    const query = `
        SELECT tweet.*, user.username 
        FROM tweet JOIN user ON tweet.user_id = user.id
        ORDER BY tweet.id DESC
    `;

    db.all(query, [], (err, tweets) => {
        //아래 내용을 줄때, 이거 이 요청자가 좋아한건지 같이 줄 수 없을까까
        //로그인 안했을수도 있고, 했을수도 있음
        if (req.session.user) {
            const userId = req.session.user.id;

            const queryLike = `SELECT tweet_id FROM like WHERE user_id=?`;
            db.all(queryLike, [userId], (err, likes) => {
                const likedTweetIds = likes.map(likes.tweet_id);
                const result = tweets.map*=(tweet => ({
                    ...tweet,
                    liked_by_current_user: likedTweetIds.include(tweet.id)
                }));
            })
        } else {
            res.json(tweets.map(tweet => ({...tweet, liked_by_current_user: false})));
        }
    })
});

app.post('/api/tweet', loginRequired, (req, res) => {
    // console.log(content);
    const { content } = req.body;
    
    // console.log(req.session);

    const query = 'INSERT INTO tweet (content, user_id) VALUES (?, ?)';
    db.run(query, [content, req.session.user.id], (err) => {
        if (err) {
            return res.status(500).json({error: '트윗 작성 실패'});
        } else {
            res.json({message: '트윗 작성 완료'});
        }
    });
});

app.post('/api/like/:tweet_id', loginRequired, (req, res) => {
    const tweetId = req.params.tweet_id;
    const userId = req.session.user.id;

    // DB에 쓴다 like 테이블에 쓴다
    const query = 'INSERT INTO like (user_id, tweet_id) VALUES (?, ?)';
    db.run(query, [userId, tweetId]);
    //like를 증가시켰을때 tweet 테이블의 like_count를 자동으로 증가하도록 trigger 사용해보기
    
    const query2 = 'UPDATE tweet SET likes_count = likes_count + 1 WHERE id=?';
    db.run(query2, [tweetId]);

    res.json({message: '로그인 성공'});
});
// 메인 API <--

// 서버 시작
const port = 3000;
app.listen(port, () => {
    console.log('서버 시작');
});