const http = require('http');
const server = http.createServer((req, res) => {
    res.whriteHerader(200, {'Content-Type': 'text/plain'});
    res.end('Olá mundo\n');
});
 const PORT = 3000;
 server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});