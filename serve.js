const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname);
const PORT = 7788;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
};

http.createServer((req, res) => {
  let urlPath = req.url === '/' ? '/rml-navbar-preview.html' : req.url;
  let filePath = path.join(BASE, urlPath);
  let ext = path.extname(filePath);
  let contentType = MIME[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}).listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
