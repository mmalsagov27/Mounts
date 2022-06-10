// let http = require('http');

// let server = http.createServer((request,response) => {
//     response.writeHead(200);
//     response.end('15151');
// })

// server.listen(8080, () => {
//     console.log('server listen on port 0606')
// });

const express = require('express') ;

const app= new express();

app.use(express.static('static')).listen(5000, () =>{
    console.log('exspress server listens on port 5000')
})  