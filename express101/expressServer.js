import express from 'express';

// An app is the express function (CreateApplication inside the express module)
const app = express();

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all('*', (req ,res) => {
  // express handles the basic headers (status code, mime-type)
  // express handles the end of the response
  res.send(`<h1>This is home page</h1>`);
});

app.listen(3000);