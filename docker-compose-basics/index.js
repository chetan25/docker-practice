const express = require('express');
const redis = require('redis');

const app = express();
// location of redis server
const client = redis.createClient({
  // should take an address in normal scenario like https://my-server.com
  // but with docker compose we can specify the container name.
  // Docker will take care of converting this host into a proper container url
  host: 'redis-server',
  port: 6379 // default port for redis
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
