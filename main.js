const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.write('Hello, world!');
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
