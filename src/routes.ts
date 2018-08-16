import { Application } from 'express';
import { PublishingController } from './controllers/publishingController';
import { ReachController } from './controllers/reachController';

export class Routes {

  private publishingController: PublishingController = new PublishingController();
  private reachController: ReachController = new ReachController();

  public routes(app: Application): void {

    // routes for publishing url
    app.route('/publishing')
      .get(this.publishingController.list)
      .put(this.publishingController.create);
    app.route('/publishing/:id')
      .get(this.publishingController.find)
      .post(this.publishingController.update)
      .delete(this.publishingController.delete);

    app.route('/reach')
      .get(this.reachController.list)
      .put(this.reachController.create);
  }
}
