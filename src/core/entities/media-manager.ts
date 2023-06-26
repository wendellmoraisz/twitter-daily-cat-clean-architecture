export interface MediaManager {
    downloadAndSaveMedia(mediaUrl: string): Promise<string>
}