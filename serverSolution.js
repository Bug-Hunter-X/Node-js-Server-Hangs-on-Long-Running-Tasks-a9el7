const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Long-running task started...');

  setTimeout(() => {
    // Simulate a long-running task
    for (let i = 0; i < 1000000000; i++) {
      // Do nothing
    }
    res.end('\nLong-running task completed!');
  }, 0); 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});