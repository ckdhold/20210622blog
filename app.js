const querystring = require('querystring')
const handleBlogRoute = require("./src/routers/blog")

const serverHandler = (req, res) => {
    // 设置响应式格式
    res.setHeader('Content-Type', 'application/json')
    // 获取 path
    const url = req.url
    req.path = url.split('?')[0]
    // 解析query
    req.query = querystring.parse(url.split('?')[1])


    const blogData = handleBlogRoute(req, res)
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.write('404 Not Found')
    res.end()
}
module.exports = serverHandler;