const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/testhook', (req, res) => {
    console.log('hit');
    res.send('hit')
})

const port = 4000;
app.listen(port, ()=> console.log(`running on port ${4000}`))