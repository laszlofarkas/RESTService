import WebSocket, { Server, ServerOptions } from 'ws';

export class WSHandler {
  server: Server;

  constructor() {
    // create a new WebSocket Server
    this.server = new Server({ noServer: true }, () => {
      console.log('WebSocket server ready')
    });

    // set event handling
    this.server.on('connection', (client: WebSocket) => {
      console.log("WebSocket client connected");
      client.on('close', () => {
        console.log("WebSocket client disconnected");
      });
    });
  }

  /**
   * Send message to all connected client
   * @param message message to be send
   */
  broadcastMessage(message: string) {
    for (const client of this.server.clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    }
  }

}
