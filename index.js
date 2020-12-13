const cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork();
    // cluster.fork();
    // cluster.fork();
    // cluster.fork();
} else {
    const express = require('express');
    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) { }
    }

    app.get('/welcome', (req, res) => {
        doWork(5000);
        res.send('Welcome to world')
    });

    app.get('/fast', (req,res)=>{
     res.send('fasting the word')
    });

    app.listen(3000);
}
