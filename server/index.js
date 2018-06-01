const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const xhub = require('express-x-hub');
require('dotenv').config();

app.use(xhub({ algorithm: 'sha1', secret: process.env.SECRET_TOKEN}));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));
app.post('/testhook', (req, res) => {
  
    console.log(req.isXHub && req.isXHubValid())

    if(req.isXHub && req.isXHubValid()){
        exec('./test.sh');
        console.log('success');
        res.json({ success: 'X-Hub Is Valid' });  
    } else {
        console.log('failed')
        res.status(400).json({ error: 'X-Hub Is Invalid' });
    }     
})

const port = 4000;
app.listen(port, ()=> console.log(`running on port ${4000}`))

