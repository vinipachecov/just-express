const http = require('http');
const fs = require('fs');

/**
 * The http module has a createServer method
 * it takes 1 arg:
 * A callback which has 2 args: request, response objects
 */

 function defaultResponse(res) {
  res.writeHead(404, {
    'content-type': 'text/html'
  });
  // http message
  // 1. start-line 
  // 2. header
  // 3. body
  // writeHead takes 2 args:
  // 1 status code
  // 2 object for the mime-type
  res.write('<h1>Page not found</h1>');
  res.end();
 }

const server = http.createServer((req ,res) => {
  console.log(req.url);
  switch(req.url) {
    case '/styles.css':
      res.writeHead(200, {
        'content-type': 'text/css'
      });
      // http message
      // 1. start-line 
      // 2. header
      // 3. body
      // writeHead takes 2 args:
      // 1 status code
      // 2 object for the mime-type
      const cssFile = fs.readFileSync('styles.css');
      res.write(cssFile);
      res.end();
      break;
    case '/Runtime-logo-Node.jpg':
      res.writeHead(200, {
        'content-type': 'image/jpg'
      });
      // http message
      // 1. start-line 
      // 2. header
      // 3. body
      // writeHead takes 2 args:
      // 1 status code
      // 2 object for the mime-type
      const image = fs.readFileSync('Runtime-logo-Node.jpg');
      res.write(image);
      res.end();
      break;
    case '/':
      res.writeHead(200, {
        'content-type': 'text/html'
      });
      // http message
      // 1. start-line 
      // 2. header
      // 3. body
      // writeHead takes 2 args:
      // 1 status code
      // 2 object for the mime-type
      const homepageHTML = fs.readFileSync('node.html');
      res.write(homepageHTML);
      res.end();
      break
    default:
      defaultResponse(res)      
  }
  // console.log(req);  
  
});

/**
 * createServer returns an object with a listen method
 * listen takes 1 arg:
 * . port to listen for http traffic on
 */
server.listen(3000);