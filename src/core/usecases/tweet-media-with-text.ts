import { MediaProviderApi } from "../entities/media-provider";
import { MediaManager } from "../entities/media-manager";
import { PostMessageWriter } from "../entities/post-message-writer";
import { TwitterService } from "../entities/twitter-service";

export class TweetMediaWithText {

    private readonly twitterService: TwitterService;
    private readonly postMessageWriter: PostMessageWriter;
    private readonly localMediaManager: MediaManager;
    private readonly mediaProviderApi: MediaProviderApi;

    constructor(
        twitterApi: TwitterService,
        postMessageWriter: PostMessageWriter,
        localMediaManager: MediaManager,
        mediaProviderApi: MediaProviderApi
    ) {
        this.twitterService = twitterApi;
        this.postMessageWriter = postMessageWriter;
        this.localMediaManager = localMediaManager;
        this.mediaProviderApi = mediaProviderApi;
    }

    public async tweetMediaWithText(): Promise<void> {
        const mediaText = this.postMessageWriter.getPostMessage();
        const mediaWithTextUrl = this.mediaProviderApi.getMediaWithTextUrl(mediaText);

        try {
            const downloadedImageSourcePath = await this.localMediaManager.downloadAndSaveMedia(mediaWithTextUrl)
            await this.twitterService.tweetWithMedia(downloadedImageSourcePath);
        } catch (error) {
            throw error;
        }
    }

}