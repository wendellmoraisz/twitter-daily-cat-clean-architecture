import fs from "fs";
import request from "request";
import { MediaManager } from "../entities/media-manager";

export class LocalMediaManager implements MediaManager {
    private defaultMediaDestinyPath;

    constructor(defaultMediaDestinyPath: string) {
        this.defaultMediaDestinyPath = defaultMediaDestinyPath;
    }

    async downloadAndSaveMedia(mediaUrl: string): Promise<string> {
        const stream = request.get(mediaUrl);
        const fileStream = fs.createWriteStream(this.defaultMediaDestinyPath);

        return new Promise((resolve, reject) => {

            fileStream.on("error", (err) => {
                console.log(this.defaultMediaDestinyPath)
                reject(err);
            });

            stream.on("error", (err) => {
                fileStream.close();
                reject(err);
            });

            fileStream.on("finish", () => {
                resolve(this.defaultMediaDestinyPath);
            });

            stream.pipe(fileStream);
        });
    }
}