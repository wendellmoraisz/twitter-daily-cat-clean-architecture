export interface IMediaManager {
    downloadAndSaveMedia(mediaUrl: string): Promise<string>
}