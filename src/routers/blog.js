const { SuccessModel } = require("../model/responseModel")
const { getBlogList, getBlogDetail, createNewBlog, updatedBlog, deleteBlog } = require("../contuollers/blog")


//处理博客相关的路由
const handleBlogRoute = (req, res) => {
    //定义处理路由的逻辑
    const method = req.method
    const id = req.query.id
    const blogData = req.body;

    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getBlogList(author, keyword)
        return new SuccessModel(listData)
        // return {
        //     message: '获取博客列表的接口'
        // }
    }
    if (method === 'GET' && req.path === '/api/blog/detail') {

        const detailData = detDetail(id);
        return new SuccessModel(detailData)
        // return {
        //     message: '获取博客详情的接口'
        // }
    }
    if (method === 'POST' && req.path === '/api/blog/new') {

        const newBlogData = createNewBlog(blogData);
        return new SuccessModel(newBlogData)
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        const updatedBlogData = updatedBlog(id, blogData)
        if (updatedBlogData) {
            return new SuccessModel('更新成功')
        } else {
            return new ErrorModel('更新失败')
        }

    }
    if (method === 'POST' && req.path === '/api/blog/delete') {
        const deleteBlogData = deleteBlog(id)
        if (deleteBlogData) {
            return new SuccessModel('删除成功')
        } else {
            return new ErrorModel('删除失败')
        }
    }
}
module.exports = handleBlogRoute;