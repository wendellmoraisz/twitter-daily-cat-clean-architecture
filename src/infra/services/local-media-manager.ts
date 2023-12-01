import fs from "fs";
import request from "request";
import { IMediaManager } from "../../core/services/media-manager";

export class LocalMediaManager implements IMediaManager {
    private readonly _defaultMediaDestinyPath;

    constructor(defaultMediaDestinyPath: string) {
        this._defaultMediaDestinyPath = defaultMediaDestinyPath;
    }

    async downloadAndSaveMedia(mediaUrl: string): Promise<string> {
        const stream = request.get(mediaUrl);
        const fileStream = fs.createWriteStream(this._defaultMediaDestinyPath);

        return new Promise((resolve, reject) => {

            fileStream.on("error", (err) => {
                console.log(this._defaultMediaDestinyPath)
                reject(err);
            });

            stream.on("error", (err) => {
                fileStream.close();
                reject(err);
            });

            fileStream.on("finish", () => {
                resolve(this._defaultMediaDestinyPath);
            });

            stream.pipe(fileStream);
        });
    }
}