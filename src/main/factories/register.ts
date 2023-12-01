import { TweetMediaWithText } from "../../core/usecases/tweet-media-with-text";
import { CatMediaProviderApi } from "../../infra/services/cat-media-provider";
import { DaysCountPostMessageWriter } from "../../infra/services/days-count-post-message-writer";
import { LocalMediaManager } from "../../infra/services/local-media-manager";
import { TwitterApiV2 } from "../../infra/services/twitter-api-v2";
import { TweetMediaController } from "../../presentation/controllers/tweet-media-controller";
import { getMediaSourcePathConfig } from "../config/media-source-path-config";
import { twitterClient } from "../config/twitter-api-v2-config";

export const makeTweetMediaController = (): TweetMediaController => {
    const twitterApi = new TwitterApiV2(twitterClient);
    const daysCountPostMessageWriter = new DaysCountPostMessageWriter(new Date("03-05-2022"));
    const localMediaManager = new LocalMediaManager(getMediaSourcePathConfig());
    const catMediaProviderApi = new CatMediaProviderApi();

    const tweetMediaWithText = new TweetMediaWithText(
        twitterApi,
        daysCountPostMessageWriter,
        localMediaManager,
        catMediaProviderApi
    );
    
    return new TweetMediaController(tweetMediaWithText);
}