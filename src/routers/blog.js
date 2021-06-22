//处理博客相关的路由
const handleBlogRoute = (req, res) => {
    //定义处理路由的逻辑
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    if (method === 'GET' && path === 'api/blog/list') {
        return {
            message: '获取博客列表的接口'
        }
    }
    if (method === 'GET' && path === 'api/blog/detail') {
        return {
            message: '获取博客详情的接口'
        }
    }
    if (method === 'GET' && path === 'api/blog/new') {
        return {
            message: '新建博客的接口'
        }
    }
    if (method === 'GET' && path === 'api/blog/update') {
        return {
            message: '更新博客的接口'
        }
    }
    if (method === 'GET' && path === 'api/blog/delete') {
        return {
            message: '删除博客接口'
        }
    }
}
module.exports = handleBlogRoute;