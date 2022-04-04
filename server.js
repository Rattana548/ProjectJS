let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mysql = require('mysql')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    return res.send({error:false,message:'Welcome'})
})

let dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shop'
})
dbCon.connect()

app.listen(3000,()=>{console.log('listening on port')})

module.exports ={app,dbCon}