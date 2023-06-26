import { Request, Response } from "express"
import { TweetMediaController } from "../../presentation/controllers/tweet-media-controller"
import { HttpRequest } from "../../presentation/controllers/ports/http"

export const expressRouteAdapter = (controller: TweetMediaController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = { body: req.body }
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}