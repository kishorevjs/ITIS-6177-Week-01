const express = require('express')
const app = express();
const port = 5000;

app.get('/Home', (req, res)=>{
    res.send('Hello World');
});

app.listen(port, ()=>{
    console.log('Node.js web server at port 5000 is running..');
})