export interface TwitterService {
    tweetWithMedia(mediaSourcePath: string, tweetCaption?: string): Promise<void>
}