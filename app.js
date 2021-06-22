const handleBlogRoute = require("./src/routers/blog")

const serverHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    const blogData = handleBlogRoute(req, res)
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return;
    }
}
module.exports = serverHandler;