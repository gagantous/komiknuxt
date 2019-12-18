const express = require("express")
const app = express();

app.get("/", function (req, res) {
    res.set('Content-Type', 'text/html')
    res.write("goto /produk to see produk");
    res.write("<br/>goto api/author/:id to see author");
    res.end();
    // db.one('SELECT $1 AS value', 123)
    //     .then(function (data) {
    //         console.log({ 'DATA': data.value })
    //     })
    //     .catch(function (error) {
    //         console.log({ 'ERROR:': error })
    //     })
})

module.exports = app;