import { Request, Response } from 'express';
import { PublishingModel } from '../models/publishingModel';

/**
 * Controller for processing HTTP request for Publishing
 */
export class PublishingController {

  private publishingModel: PublishingModel;

  constructor() {
    this.publishingModel = new PublishingModel();
  }

  /**
   * Listing all Publishing items to the client
   * @param {Request} req HTTP Request
   * @param {Response} res HTTP Response
   */
  public listPublishing(req: Request, res: Response) {
    res.status(200).json(this.publishingModel.listPublishing());
  }

}
