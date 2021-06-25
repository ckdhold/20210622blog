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
    const sql = `insert into blogs (title, content, author, createdAt) values ('${title}', '${content}', '${author}', ${createdAt})`
    return execSQL(sql).then(insertedResult => {
        console.log('insertedResult', insertedResult)
        return {
            id: insertedResult.insertId
        }
    })
}
// 更新博客
const updatedBlog = (id, blogData = {}) => {
    const title = blogData.title
    const content = blogData.content

    const sql = `update blogs set title='${title}', content='${content}' where id=${id}`
    return execSQL(sql).then(updatedResult => {
        console.log('updatedResult', updatedResult)
        if (updatedResult.affectedRows > 0) {
            return true
        }
        return false
    })
}
// 删除博客（实际最好用软删除'sate')
const deleteBlog = (id, author) => {
    const sql = `delete from blogs where id=${id} and author='${author}'`
    return execSQL(sql).then(deleteResult => {
        console.log('deleteResult', deleteResult)
        if (deleteResult.affectedRows > 0) {
            return true
        }
        return false
    })
}
module.exports = {
    getBlogList,
    getBlogDetail,
    createNewBlog,
    updatedBlog,
    deleteBlog
}