import { Permission } from "../enums/permission";
import { Account } from "./account";
import { User } from "./user";

export class Investor extends User {

    constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly email: string,
        public readonly password: string,
        public readonly permission: Permission,
        public readonly active: Boolean,
        public readonly listAccount: Account[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {
        super(id, username, email, password, permission, active, createdAt, updatedAt);
    }

}