import { Request, Response } from 'express';
import { Application } from 'express';

export class Routes {

  public routes(app: Application): void {

    // routes for base url
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'Hello Web!'
        });
      })

  }
}
