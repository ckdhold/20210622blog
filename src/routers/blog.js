const { SuccessModel } = require("../model/responseModel")
const { getList } = require("../contuollers/blog")

//处理博客相关的路由
const handleBlogRoute = (req, res) => {
    //定义处理路由的逻辑
    const method = req.method

    if (method === 'GET' && req.path === 'api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
        // return {
        //     message: '获取博客列表的接口'
        // }
    }
    if (method === 'GET' && req.path === 'api/blog/detail') {
        return {
            message: '获取博客详情的接口'
        }
    }
    if (method === 'POST' && req.path === 'api/blog/new') {
        return {
            message: '新建博客的接口'
        }
    }
    if (method === 'POST' && req.path === 'api/blog/update') {
        return {
            message: '更新博客的接口'
        }
    }
    if (method === 'POST' && req.path === 'api/blog/delete') {
        return {
            message: '删除博客接口'
        }
    }
}
module.exports = handleBlogRoute;