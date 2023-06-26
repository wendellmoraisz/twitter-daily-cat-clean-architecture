import path from "path";

export const getMediaSourcePathConfig = (): string => {
    const rootDir = path.resolve(__dirname, "../../../");
    return path.join(rootDir, "assets/cat.png");
}
