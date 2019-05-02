const express = require("express");
const http = require("http");
const MongoClient = require("mongodb").MongoClient;
const rp = require('request-promise');
const fs = require('fs');
const app = express();
// const cheerio = require('cheerio');

http.createServer(app).listen(80);

const url = 'http://motherfuckingwebsite.com/';
const mongo_url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(mongo_url, { useNewUrlParser: true });
let scrapped_data;
let returned_data;

rp(url)
    .then(function(html){
        scrapped_data = {name: url, value: html};
    })
    .catch(function(err){
        return console.log(err);
    });

mongoClient.connect(function(err, client){

    const db = client.db("urls_db");
    const collection = db.collection("urls");

    if(err) return console.log(err);

    collection.insertOne(scrapped_data, function(err){
        if(err){
            return console.log(err);
        }
    });

    collection.findOne({name: url}, function (err, result) {
        if (err) {
            return console.log(err);
        }
        returned_data = result["value"];
        fs.writeFile("public/index.html", returned_data, function (err) {
            if (err) {
                return console.log(err);
            }
        })
    });
    client.close();
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