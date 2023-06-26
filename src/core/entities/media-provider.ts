export interface MediaProviderApi {
    readonly BASE_URL: string
    getMediaWithTextUrl(text: string): string
}