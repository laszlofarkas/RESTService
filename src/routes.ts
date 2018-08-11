import { Request, Response } from 'express';
import { Application } from 'express';
import { PublishingController } from './controllers/publishingController';

export class Routes {

  private publishingController: PublishingController = new PublishingController()

  public routes(app: Application): void {

    // routes for base url
    app.route('/')
      .get((req: Request, res: Response) =>
        this.publishingController.listPublishing(req, res)
      )
  }
}
