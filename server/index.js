const express       = require("express")
const app           = express();
const PORT_NUMBER   = 4000;


app.use(require('./routes'))
app.use('/produk',require('./routes/produk'))

/// INI BUAT API COMICVINE NYA

app.use(`/api`,require(`./routes/comicvine`))
app.use('/api/author',require(`./routes/comicvine/author`))


app.listen(PORT_NUMBER, function () {
    console.log(`Buka di localhost:${PORT_NUMBER}`);
})



