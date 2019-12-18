const express = require("express")
const app = express();

app.get("/", function (req, res) {
    
    res.set('Content-Type', 'text/html')
    res.write("Ini adalah service API buat dapatin data JSON dari situs comicvine");
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