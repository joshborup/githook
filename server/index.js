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

    if(req.isXHub && req.isXHubValid()){
        exec('npm run build',
        function(err, stdout, stderr) {
            if (err){
                 throw err;
            }else{
                console.log('AEEE YERAH');
                res.status(200).send('hit');
            }
        });
    }else {
        res.status(401).send('unauthorized');
    }
})


const port = 4000;
app.listen(port, ()=> console.log(`running on port ${4000}`))