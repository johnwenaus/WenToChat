const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/status', (request, response) => response.json({clients: clients.length}));

const PORT = 3000;

let clients = {};

app.listen(PORT, () => {
  console.log(`FES chat server is listening at http://localhost:${PORT}`)
})

function eventsHandler(request, response, next) {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  response.writeHead(200, headers);

  const clientId = request.query.id;

  clients[clientId] = response;

  console.log(`${clientId} is registered for server events`);

  const data = `${clientId}. You are connected to the chat server\n`;
  for (const id in clients) {
    clients[id].write(`${clientId}: connected\n`);
  }

  response.write(data);

  request.on('close', () => {
    console.log(`${clientId} Connection closed`);
    delete clients[clientId];
  });
}

app.get('/events', eventsHandler);

function sendEventsToClient(clientId, content) {
  for (const id in clients) {
    clients[id].write(`${clientId}: ${content}\n`);
  }
}

function post(request, respsonse, next) {

  const clientId = request.body.clientId;
  const content = request.body.content;

  respsonse.end();
  return sendEventsToClient(clientId, content);
}

app.post('/post', post);
