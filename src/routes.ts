import { Request, Response } from 'express';
import { Application } from 'express';
import { PublishingController } from './controllers/publishingController';

export class Routes {

  private publishingController: PublishingController = new PublishingController()

  public routes(app: Application): void {

    // routes for publishing url
    app.route('/publishing')
      .get(this.publishingController.list)
      .put(this.publishingController.create);
    app.route('/publishing/:id')
      .get(this.publishingController.find)
      .post(this.publishingController.update)
      .delete(this.publishingController.delete)
  }
}
