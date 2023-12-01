import { IMediaProviderApi } from "../../core/services/media-provider";

export class CatMediaProviderApi implements IMediaProviderApi {
    private readonly BASE_URL: string = "https://cataas.com/cat";

    getMediaWithTextUrl(text: string, textColor: string): string {
        return `${this.BASE_URL}/says/${encodeURIComponent(text)}?fontColor=${encodeURIComponent(textColor)}`;
    }

}