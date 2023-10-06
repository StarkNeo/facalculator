const express = require('express');
const app = express();
const cors = require('cors');
const crud = require('./crud');
const {config}= require('dotenv');

config()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server online on port:${port}`);
})

app.get('/jelou', async (req,res)=>{
    res.send({message:"jelou"});
})

app.post('/getInpc', async (req, res) => {
    try {
        let response = await crud.consulta(req.body.month, req.body.year);
        res.status(200).send({ message: "inpc recibido", data: response })
    } catch (error) {
        res.status(400).send({message:"Indice", data: 1})
    }

})
