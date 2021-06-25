const querystring = require('querystring')
const handleBlogRoute = require("./src/routers/blog")
// 处理post数据
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({});
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return
        }
        let postData = '';
        req.on('data', (chunk) => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise

}

const serverHandler = (req, res) => {
    // 设置响应式格式
    res.setHeader('Content-Type', 'application/json')
    // 获取 path
    const url = req.url
    req.path = url.split('?')[0]
    // 解析query
    req.query = querystring.parse(url.split('?')[1])
    // 处理post数据
    getPostData(req).then((postData) => {
        req.body = postData
        // 博客相关路由
        const blogDataPromise = handleBlogRoute(req, res)
        if (blogDataPromise) {
            blogDataPromise.then((blogData) => {

                res.end(JSON.stringify(blogData))
            })
            return;
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404 Not Found')
        res.end()
    })
}
module.exports = serverHandler;