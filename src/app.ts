import express from 'express';
import * as bodyParser from 'body-parser'
import { Routes } from './routes';

class App {

  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  /**
   * Configure application with default
   */
  private config(): void {
    // request body will be parsed as json
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
