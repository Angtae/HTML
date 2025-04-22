const sqlite3 = require('sqlite3');

// Create or open a database named 'test.db'
const db = new sqlite3.Database('test.db');

// 아래 모든 라인이 비동기로 실행됨을 인지해야함..! 매우 큰 주의사항!

// Run the CREATE TABLE query
db.run('CREATE TABLE IF NOT EXISTS messages (text TEXT)', function (err) {
    if (err) {
        console.error("Error creating table:", err);
        return;
    }

    // Insert a new message into the messages table
    db.run('INSERT INTO messages (text) VALUES (?)', ['Hello, SQLite!'], function (err) {
        if (err) {
            console.error("Error inserting data:", err);
            return;
        }

        console.log('데이터 삽입 성공');

        // Use db.each to retrieve and print all messages from the table
        db.each('SELECT * FROM messages', (err, row) => {
            if (err) {
                console.error("Error retrieving data:", err);
                return;
            }
            console.log(row.text);
        });

        // Close the database connection after use
        db.close((err) => {
            if (err) {
                console.error("Error closing the database:", err);
                return;
            }
            console.log('성공적으로 연결 종료한 시점.');
        });
    });
});


// const sqlite3 = require('sqlite3');

// const db = new sqlite3.Database('test.db')

// // 아래 모든 라인이 비동기로 실행됨을 인지해야함..! 매우 큰 주의사항!

// // run 은 실행만 하고 결과를 받아올 수 없다.
// db.run('CREATE TABLE IF NOT EXISTS messages (text TEXT)'), (err) => {
//     db.run('INSERT INTO messages (text) VALUES (?)', ['Hello, SQLite!'], (err) => {
//         console.log('테이블 생성에 성공한 사람.')
//         //each 는 실행 결과를 받아올수있음
//         db.each('SELECT * FROM messages', (err,row) => {
//             console.log(row.text);
//         });

//         db.close(err) => {
//             console.log('성공적으로 연결에 종료한 시점.');
//         });
//     });
// });