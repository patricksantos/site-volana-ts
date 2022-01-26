import { Permission } from "../enums/permission";
import { Historic } from "./historic";
import { User } from "./user";

export class Player extends User {

    constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly email: string,
        public readonly password: string,
        public readonly permission: Permission,
        public readonly whatsapp: string,
        public readonly discord: string,
        public readonly birthDate: Date,
        public readonly active: Boolean,
        public readonly listHistoric: Historic[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {
        super(id, username, email, password, permission, active, createdAt, updatedAt);
    }

}