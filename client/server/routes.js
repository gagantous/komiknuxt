import Router from 'express'
import * as Pg from '~/plugins/pg-promise'


const app = Router();
const db = Pg();

export default () => {
    app.get('/', (req,res,next) => {
        
    })


    app.get('/author', (req,res,next) => {
        db.one({
            text: 'SELECT * FROM m_pengarang', // can also be a QueryFile object
        })
            .then(user => {
                res.body = user
            })
            .catch(error => {
                console.log(error)  
            });
        next();
    })

    return app;
}