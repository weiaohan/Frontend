const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.listen(5000, () => {
    console.log("[port] 80: listening...");
})

server.on("request", (req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {
            "content-type": "text/html"
        })
        fs.readFile("./date.html", "utf-8", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.end(data);
        })
    }
})