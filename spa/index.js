
var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Access-Control-Allow-Origin': '*'//可以是*，也可以是跨域的地址
    })
});
server.listen(9985);
server.on("request", (req, res) => {
    var post = '';
    req.on('data', function (chunk) {
        post += chunk;
    });
    req.on('end', function () {
        post = querystring.parse(post);
        obj[get_url_loc(req.url)](req, res, post)
    });
})
var obj = {
    readFileSync(req, res, data) {
        try {
            var item = fs.readFileSync(data.url, data.uft)
            res.end(item)
        } catch (error) {
            console.log(error)
        }
    },
    writeFile(req, res, data) {
        try {
            var item = fs.writeFile(data.url, data.data, err => {
                if (err) {
                    res.end(err)
                } else {
                    res.end('')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}
function get_url_loc(url) {
    return url.replace('/', '')
}
function is_url(url, verify) {
    return url.includes(verify)
}