const cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork();
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

    app.listen(3000);
}
