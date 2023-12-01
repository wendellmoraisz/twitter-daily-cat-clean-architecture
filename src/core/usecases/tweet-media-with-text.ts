import { IMediaProviderApi } from "../services/media-provider";
import { IMediaManager } from "../services/media-manager";
import { IPostMessageWriter } from "../services/post-message-writer";
import { ITwitterService } from "../services/twitter-service";

export class TweetMediaWithText {

    private readonly _twitterService: ITwitterService;
    private readonly _postMessageWriter: IPostMessageWriter;
    private readonly _localMediaManager: IMediaManager;
    private readonly _mediaProviderApi: IMediaProviderApi;

    constructor(
        twitterApi: ITwitterService,
        postMessageWriter: IPostMessageWriter,
        localMediaManager: IMediaManager,
        mediaProviderApi: IMediaProviderApi
    ) {
        this._twitterService = twitterApi;
        this._postMessageWriter = postMessageWriter;
        this._localMediaManager = localMediaManager;
        this._mediaProviderApi = mediaProviderApi;
    }

    public async tweetMediaWithText(): Promise<void> {
        const mediaText = this._postMessageWriter.getPostMessage();
        const mediaWithTextUrl = this._mediaProviderApi.getMediaWithTextUrl(mediaText, "white");

        try {
            const downloadedImageSourcePath = await this._localMediaManager.downloadAndSaveMedia(mediaWithTextUrl)
            await this._twitterService.tweetWithMedia(downloadedImageSourcePath);
        } catch (error) {
            throw error;
        }
    }

}