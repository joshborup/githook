const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const exec = require('child_process').exec

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

app.post('/testhook', (req, res) => {
    if(req.body.sender.login === 'joshborup'){
        exec('npm run build',
        function(err, stdout, stderr) {
            if (err) throw err;
            else res.status(200).send('hit');
        }); 
    }   
})

const port = 4000;
app.listen(port, ()=> console.log(`running on port ${4000}`))