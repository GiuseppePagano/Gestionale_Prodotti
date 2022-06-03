var bodyparser = require('body-parser')
var express = require('express')
const mysql = require('mysql')
var cors = require('cors')
const app = express();
app.use(bodyparser.json()) 
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())  

const port = 4000;
const host = "localhost"

const database = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P0Pcorn!",  
    database: "gestionale_prod", 
    insecureAuth: true
})

app.listen(port, host, ()=>{
    console.log(`Sono connesso all'indirizzo http://${host}:${port}`) 
})


app.post("/login", (req, res) => {
    let email = req.body.email;
    let passw = req.body.password;

    database.query(`SELECT * FROM gestionale_prod.amministratori WHERE eml = '${email}' AND pwd = '${passw}'`, (errore, risultato, campi)=>{

        if(!errore && risultato.length == 1){
            res.json({
                status: "success",
                data: risultato[0]
            })
        }
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })
})

app.get("/prod/lista", (req, res) => {

    database.query("SELECT * FROM gestionale_prod.prodotti", (errore, risultato, campi)=>{
        if(!errore)
            res.json(risultato);
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })

})

app.get("/prod/dettaglio/:codice", (req, res) => {

    database.query(`SELECT * FROM gestionale_prod.prodotti WHERE codice = '${req.params.codice}'`, (errore, risultato, campi)=>{
        if(!errore)
            res.json(risultato);
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })

})
app.post("/prod/inserisci",  (req, res) => {

    database.query(`INSERT INTO gestionale_prod.prodotti (nome, descr,link,prezzo,percen, codice) 
        VALUES ('${req.body.nome}', '${req.body.descr}', '${req.body.link}', '${req.body.prezzo}','${req.body.percen}', '${req.body.codice}')`, (errore, risultato, campi)=>{
        if(!errore)
            res.json(risultato);
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })

})

app.delete("/prod/dettaglio/:codice", (req, res) => {
    database.query(`DELETE FROM gestionale_prod.prodotti WHERE codice = '${req.params.codice}'`, (errore, risultato, campi)=>{
        if(!errore)
            res.json(risultato);
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })

})


app.put("/prod/dettaglio/:codice", (req, res) => {
    database.query(`UPDATE gestionale_prod.prodotti SET nome=('${req.body.nome}'), descr=( '${req.body.descr}',  link=( '${req.body.link}',  prezzo=( '${req.body.prezzo}',  percen=( '${req.body.percen}', ) WHERE codice = '${req.params.codice}'`, (errore, risultato, campi)=>{
        if(!errore)
            res.json(risultato);
        else
            res.json({
                status: "error", 
                data: errore.sqlMessage 
            })
    })

})
