const { SuccessModel } = require("../model/responseModel")
const { getBlogList, getBlogDetail, createNewBlog, updatedBlog, deleteBlog } = require("../contuollers/blog")


//处理博客相关的路由
const handleBlogRoute = (req, res) => {
    //定义处理路由的逻辑
    const method = req.method
    const id = req.query.id
    const blogData = req.body;
    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {

        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listDataPromise = getBlogList(author, keyword)
        return listDataPromise.then(listData => {
            return new SuccessModel(listData)
        })
    }
    // 获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const detailDataPromise = getBlogDetail(id)
        return detailDataPromise.then(detailData => {
            return new SuccessModel(detailData)
        })
    }
    // 新增博客
    if (method === 'POST' && req.path === '/api/blog/new') {

        // const newBlogData = createNewBlog(blogData);
        // return new SuccessModel(newBlogData)
        const author = 'ckd'
        req.body.author = author
        const newBlogDataPromise = createNewBlog(blogData);
        return newBlogDataPromise.then(newBlogdata => {
            return new SuccessModel(newBlogData)
        })
    }
    // 更新博客
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