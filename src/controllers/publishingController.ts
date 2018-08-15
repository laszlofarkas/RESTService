import { Request, Response } from 'express';
import { model } from 'mongoose';
import { PublishingSchema } from '../models/publishingModel';

const Publishing = model('publishing', PublishingSchema);

/**
 * Controller for processing HTTP request for Publishing
 */
export class PublishingController {

  /**
   * Listing all publishing items to the client
   * @param {Request} req HTTP Request
   * @param {Response} res HTTP Response
   */
  public list(req: Request, res: Response) {
    Publishing.find({}, (err, publishingList) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(publishingList)
    });
  }

  public find(req: Request, res: Response) {
    Publishing.findOne({ id: req.params.id }, (err, publishing) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(publishing);
    })
  }

  /**
   * Create a new publishing
   * @param {Request} req HTTP Request
   * @param {Response} res HTTP Response
   */
  public create(req: Request, res: Response) {
    let newPublishing = new Publishing(req.body);
    newPublishing.save((err, publishing) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(publishing);
    });
  }

  /**
   * Modify a publishing
   * @param {Request} req HTTP Request
   * @param {Response} res HTTP Response
   */
  public update(req: Request, res: Response) {
    Publishing.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }, (err, publishing) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(publishing);
    });
  }

  /**
   * remove a publishing
   * @param {Request} req HTTP Request
   * @param {Response} res HTTP Response
   */
  public delete(req: Request, res: Response) {
    Publishing.remove({ id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send(err)
      }
      res.sendStatus(200);
    })
  }

}
