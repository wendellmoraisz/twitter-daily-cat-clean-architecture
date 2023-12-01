import { IPostMessageWriter } from "../../core/services/post-message-writer";

export class DaysCountPostMessageWriter implements IPostMessageWriter {
    private readonly _referenceDate;

    constructor(referenceDate: Date) {
        this._referenceDate = referenceDate;
    }

    getPostMessage(): string {
        return `${this.getDaysQuantity()} dias`;
    }

    private getDaysQuantity() {
        const timeDiff = Math.abs(Date.now() - this._referenceDate.getTime());
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24) - 1);
        return daysDiff;
    }
}