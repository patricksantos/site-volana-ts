import { User } from "../core/entity/user";

export class UserAdapter {
    constructor() { }
    public static create(json: any): User {
        throw new Error("Method not implemented.");
    }
}