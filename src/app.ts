import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { connect, connection } from 'mongoose';
import { Routes } from './routes';

class App {

  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.routePrv.routes(this.app);
  }

  /**
   * Configure application with default
   */
  private config(): void {
    // request body will be parsed as json
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors({
      origin: 'http://localhost:4200'
    }));
  }

  /**
   * Configure MongoDB connection
   */
  private mongoSetup(): void {
    connect('mongodb://localhost:27017/publishing');
    connection.on('error', (err) => console.error('mongo error', err))
    connection.on('open', () => console.log('connected to mongoDB'))
  }
}

export default new App().app;
