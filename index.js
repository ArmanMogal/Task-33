const fs = require("fs");

const http = require("http");

const PORT = process.env.PORT || 8000;


var app = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
    })

    let data = new Date();
    fs.writeFile('date-time.txt', data.toString(), 'utf-8', (err) => {

        if (err)
            console.log(err)

        else {
            fs.readFile('date-time.txt', 'utf-8', (err, data) => {
                res.write(data)
                res.end()
            })
        }
    })

})

app.listen(PORT,() => console.log("server is listining port:" + PORT));