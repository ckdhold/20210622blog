const { SuccessModel } = require("../model/responseModel")
const { getBlogList, getBlogDetail, createNewBlog } = require("../contuollers/blog")


//处理博客相关的路由
const handleBlogRoute = (req, res) => {
    //定义处理路由的逻辑
    const method = req.method

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
        const id = req.query.id
        const detailData = detDetail(id);
        return new SuccessModel(detailData)
        // return {
        //     message: '获取博客详情的接口'
        // }
    }
    if (method === 'POST' && req.path === '/api/blog/new') {
        const blogData = req.body;
        const newBlogData = createNewBlog(blogData);
        return new SuccessModel(newBlogData)
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        console.log(req.body)
        return {
            message: '更新博客的接口'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/delete') {
        return {
            message: '删除博客接口'
        }
    }
}
module.exports = handleBlogRoute;