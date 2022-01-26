import { Account } from "./account";
import { Player } from "./player";

export class Historic {

    constructor(
        public readonly id: number,
        public readonly player: Player,
        public readonly account: Account,
        public readonly total: number,
        public readonly roninSlp: number,
        public readonly gameSlp: number,
        public readonly todaySoFar: number,
        public readonly lastClaimedItemAt: number,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) { }

}