import { PostMessageWriter } from "../entities/post-message-writer";

export class DaysCountPostMessageWriter implements PostMessageWriter {
    private referenceDate = new Date("03-05-2022");

    getPostMessage(): string {
        return `${this.getDaysQuantity()} dias`;
    }

    private getDaysQuantity() {
        const timeDiff = Math.abs(Date.now() - this.referenceDate.getTime());
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24) - 1);
        return daysDiff;
    }
}