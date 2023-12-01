import { TwitterApi } from "twitter-api-v2";
import { ITwitterService } from "../../core/services/twitter-service";

export class TwitterApiV2 implements ITwitterService {
    private readonly _twitterClient: TwitterApi;

    constructor(twitterClient: TwitterApi) {
        this._twitterClient = twitterClient;
    }

    async tweetWithMedia(mediaSourcePath: string, tweetCaption?: string): Promise<void> {
        const mediaId = await this.uploadMedia(mediaSourcePath);
        await this._twitterClient.v2.tweet({
            text: tweetCaption || "",
            media: {
                media_ids: [mediaId]
            }
        });
    }

    private async uploadMedia(mediaSourcePath: string): Promise<string> {
        return await this._twitterClient.v1.uploadMedia(mediaSourcePath);
    }
}