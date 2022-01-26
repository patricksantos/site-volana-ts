import { Permission } from "../enums/permission";

export abstract class User {
    constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly email: string,
        public readonly password: string,
        public readonly permission: Permission,
        public readonly active: Boolean,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) { }
}