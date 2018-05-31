const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.post('/testhook', (req, res) => {
    console.log('hit');
    res.status(200).send('hit')
})

const port = 4000;
app.listen(port, ()=> console.log(`running on port ${4000}`))