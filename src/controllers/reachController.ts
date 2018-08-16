import { Request, Response } from 'express';
import { Reach } from '../models/reachModel';

export class ReachController {

  /**
   * List all reach items
   * @param {Request} req HTTP Request
   * @param {Response} res HTTP Response
   */
  list(req: Request, res: Response) {
    Reach.find({}, (err, reachList) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(reachList);
    })
  }

  /**
   * Create a new reach
   * @param {Request} req HTTP Request
   * @param {Response} res HTTP Response
   */
  create(req: Request, res: Response) {
    let newReach = new Reach(req.body);
    newReach.save((err, reach) => {
      if (err) {
        res.status(500).send(err);
      }
      res.sendStatus(200);
    })
  }
}
