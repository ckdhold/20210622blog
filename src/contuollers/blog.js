const { execSQL } = require('../db/mysql')
// 获取博客列表
const getBlogList = (author, keyword) => {
    //从数据库里拿数据
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%'`
    }
    //promise
    return execSQL(sql)
}
// 获取博客详情
const getBlogDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`

    return execSQL(sql).then(rows => {
        console.log('rows', rows)
        return rows[0]
    })
}
// 创建博客
const createNewBlog = (blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createdAt = Date.now()
    const sql = `insert into blogs (title, content, author, createdAt) values ('${title}', '${content}', '${author}', ${createdAt}')`
    return execSQL(sql).then(insertedResult => {
        console.log('insertedResult', insertedResult)
        return {
            id: insertedResult.insertId
        }
    })
}
// 更新博客
const updatedBlog = (id, blogData = {}) => {
    console.log('id', id)
    console.log('blogData', blogData)

    return true
}
const deleteBlog = (id) => {
    console.log('id', id)
    return true
}
module.exports = {
    getBlogList,
    getBlogDetail,
    createNewBlog,
    updatedBlog,
    deleteBlog
}