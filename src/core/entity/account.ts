import { Investor } from "./investor";
import { Player } from "./player";

export class Account {

    constructor(
        public readonly id: number,
        public readonly player: Player,
        public readonly investor: Investor,
        public readonly ronnin: string,
        public readonly nick: string,
        public readonly email: string,
        public readonly password: string,
        public readonly percentage_investor: number,
        public readonly percentage_school: number,
        public readonly percentage_player: number,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) { }

}