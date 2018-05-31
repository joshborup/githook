const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exec = require('child_process').exec


app.post('/testhook', (req, res) => {
    console.log('your just pushed your file!');
    

    let child = exec('npm run build',
      function(err, stdout, stderr) {
        if (err) throw err;
        else res.status(200).send('hit');
    });
    child;
})

const port = 4000;
app.listen(port, ()=> console.log(`running on port ${4000}`))