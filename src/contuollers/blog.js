// 博客相关的方法
const getBlogList = (author, keyword) => {
    //从数据库里拿数据
    // 先返回假数据
    return [
        {
            id: 1,
            title: '标题1',
            content: 'neirong1',
            author: 'zhangsan',
            createAt: 1624430490007
        },
        {
            id: 2,
            title: '标题2',
            content: 'neirong2',
            author: 'zhangsan2',
            createAt: 1624430490027
        }
    ]
}
const getBlogDetail = (id) => {
    return {
        id: 2,
        title: '标题2',
        content: 'neirong2',
        author: 'zhangsan2',
        createAt: 1624430490027
    }

}
// 创建博客
const createNewBlog = (blogData) => {
    console.log('blogData', blogData)
    return {
        id: 1
    }
}
module.exports = {
    getBlogList,
    getBlogDetail,
    createNewBlog
}