import app from './app';
import { WSHandler } from './websocket';
import http from 'http';

// app will listen on this port
const httpPort = 3000;
const wsPort = 3001;

// start application
app.listen(httpPort, () => {
  console.log('App listening on port ' + httpPort);
})

// start websocket
// define websockets
export const publishingWS = new WSHandler();
export const reachesWS = new WSHandler();

// create server for WSs
const wsServer = http.createServer();

// routing clients by url path
wsServer.on('upgrade', (request, socket, head) => {
  if (/publishing/.test(request.url)) {
    publishingWS.server.handleUpgrade(request, socket, head, function done(ws) {
      publishingWS.server.emit('connection', ws, request);
    });
  } else if (/reaches/.test(request.url)) {
    reachesWS.server.handleUpgrade(request, socket, head, function done(ws) {
      reachesWS.server.emit('connection', ws, request);
    });
  }
})

// start server
wsServer.listen(wsPort)
