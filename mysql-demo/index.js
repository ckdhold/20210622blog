const mysql = require('mysql')

// 创建链接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'myblog'
})

// 开始链接
connection.connect();

// 执行sql语句
const sql = 'select * from blogs'
connection.query(sql, (err, result) => {
    if (err) {
        console.error('error', error)
        return
    }
    console.log('result', result)
}
)
// 关闭链接
connection.end()