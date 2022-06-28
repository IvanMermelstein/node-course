const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Homepage');
    }

    if (req.url === '/about') {
        res.end('About Page');
    }

    res.end(`
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
        <a href="/">back home</a>
    `);
});

server.listen(5000);
