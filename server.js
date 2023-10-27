const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const menuPage = fs.readFileSync('menu.html');
const orderPage = fs.readFileSync('order.html');
const errorPage = fs.readFileSync('error.html');

server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end(homePage);
    }
    else if(req.url === '/about'){
        res.end(aboutPage);
    }
    else if(req.url === '/menu'){
        res.end(menuPage);
    }
    else if(req.url === '/order'){
        res.end(orderPage);
    }
    else{
        res.writeHead(404);
        res.end(errorPage);
    }
});

server.listen(3000);
