import { MediaProviderApi } from "../entities/media-provider";

export class CatMediaProviderApi implements MediaProviderApi {
    BASE_URL: string = "https://cataas.com/cat";

    getMediaWithTextUrl(text: string): string {
        return `${this.BASE_URL}/says/${encodeURIComponent(text)}`;
    }

}