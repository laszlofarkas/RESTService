import { Request, Response } from 'express';
import { model } from 'mongoose';
import { PublishingSchema } from '../models/publishingModel';

const Publishing = model('publishing', PublishingSchema);

/**
 * Controller for processing HTTP request for Publishing
 */
export class PublishingController {

  /**
   * Listing all Publishing items to the client
   * @param {Request} req HTTP Request
   * @param {Response} res HTTP Response
   */
  public listPublishing(req: Request, res: Response) {
    Publishing.findOne({}, (err, publishingList) => {
      if(err) {
        res.status(500).send(err);
      }
      res.json(publishingList)
    });
  }

}
