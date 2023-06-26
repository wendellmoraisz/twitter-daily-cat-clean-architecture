import { TwitterApi } from "twitter-api-v2";
import { TwitterService } from "../entities/twitter-service";

export class TwitterApiV2 implements TwitterService {
    private twitterClient: TwitterApi;

    constructor(twitterClient: TwitterApi) {
        this.twitterClient = twitterClient;
    }

    async tweetWithMedia(mediaSourcePath: string, tweetCaption?: string): Promise<void> {
        const mediaId = await this.uploadMedia(mediaSourcePath);
        await this.twitterClient.v2.tweet({
            text: tweetCaption || "",
            media: {
                media_ids: [mediaId]
            }
        });
    }

    private async uploadMedia(mediaSourcePath: string): Promise<string> {
        return await this.twitterClient.v1.uploadMedia(mediaSourcePath);
    }
}