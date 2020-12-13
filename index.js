const express = require('express');
const app = express();

app.get('/welcome', (req, res) => {
    res.send('Welcome to world')
});

app.listen(3000);