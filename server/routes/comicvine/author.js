const express       = require("express");
const make_api_call = require("../../config/request");
const pgp            = require("../../config/db");

const app       = express();
const apiKey    = "?api_key=7b7114b30667c1db9f660f6b20fa4dcfb0836f93";

app.get("/:idAuthor?", function (req, res) {
    let idAuthor = req.params.idAuthor;
    if (idAuthor == "" || typeof idAuthor == "undefined") {
        res.send("parameter belum diisi");
    } else {
        const url = "https://comicvine.gamespot.com/api/person/" + idAuthor + "/" + apiKey + "&format=json&sort=id";
        make_api_call(url)
            .then(response => {
                let objPeople = JSON.parse(response).results;
                if(objPeople.length == 0){
                    res.send("Data Pengarang tidak ditemukan");
                }else{
                    pgp.any('SELECT * FROM m_pengarang WHERE id_pengarang = $1', [objPeople.id.toString()])
                        .then(function (data) {
                            console.log(data);
                            if (data.length == 0) {
                                const arrAuthor = {
                                    id_pengarang: objPeople.id.toString(),
                                    nama_pengarang: objPeople.name,
                                    tgl_lahir: objPeople.birth,
                                    jenis_kelamin: objPeople.gender,
                                    tgl_wafat: objPeople.death,
                                    asal_negara: objPeople.country
                                }
                                const query = pgp.helpers.insert(arrAuthor, null, 'm_pengarang');
                                none(query)
                                    .then(data => {
                                        res.send(" Berhasil merekam data untuk pengarang : "+ objPeople.name);
                                    })
                                    .catch(error => {
                                        res.send("Gagal merekan data pengarang "+ objPeople.name +" : " + error)
                                    });
                            }else{
                                res.send("Data Pengarang ini sudah dimasukkan ke dalam database : "+objPeople.name);
                            }
                        })
                        .catch(function (error) {
                            res.status("400").send("Error gak tau kenapa bisa error : " + error)
                        })
                }
            })
            .catch(error => {
                res.send(error)
            })
    }
})

module.exports = app;