const express = require('express');// npm i express
const bodyParser = require("body-parser");// npm i body-parser
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"host": req.originalUrl, "resCode": "S0001", "resMsg": "정상 처리되었습니다."});
})

app.get('/test', (req, res) => {
    res.json({"host": req.originalUrl, "resCode": "S0001", "resMsg": "정상 처리되었습니다."});
})

app.listen(3000,()=>console.log(`http://localhost:3000`));