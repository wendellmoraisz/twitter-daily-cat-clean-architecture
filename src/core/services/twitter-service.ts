export interface ITwitterService {
    tweetWithMedia(mediaSourcePath: string, tweetCaption?: string): Promise<void>
}