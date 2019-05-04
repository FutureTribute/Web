const http = require("http");
const https = require("https");
const express = require("express");
const app = express();
const fs = require("fs");
const jsonParser = express.json();

let options = {
    key: fs.readFileSync('open-ssl certs/localhost.key'),
    cert: fs.readFileSync('open-ssl certs/localhost.crt')
};

app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

app.post("/info", jsonParser, function (req, res) {
    console.log(req.body);
    if (!req.body) return res.sendStatus(400);
    let val1 = req.body.value1;
    let val2 = req.body.value2;
    res.json({ConcatString: val1 + val2});
});

app.get("/*", function(req,res){
	console.log(req.url);
	if (req.url.startsWith("/public/")) {
		let filePath = req.url.substr(1);
		fs.readFile(filePath, function(error, data) {
			if (error) {
				f404(res);
			} else {
				res.setHeader("Content-Type", "text/html");
				res.end(data);
			}
		})
	} else {
		f404(res);
	}
});

function f404(res) {
	res.statusCode = 404;
	res.end("404 Response not found");
}

// app.get()