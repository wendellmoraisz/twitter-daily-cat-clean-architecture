import { TweetMediaWithText } from "../../core/usecases/tweet-media-with-text";
import { internalServerError, ok } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

export class TweetMediaController {

    private readonly tweetMediaWithText: TweetMediaWithText;

    constructor(tweetMediaWithText: TweetMediaWithText) {
        this.tweetMediaWithText = tweetMediaWithText;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            await this.tweetMediaWithText.tweetMediaWithText();
            return ok("Media successful tweeted");
        } catch (e) {
            return internalServerError();
        }
    }
}