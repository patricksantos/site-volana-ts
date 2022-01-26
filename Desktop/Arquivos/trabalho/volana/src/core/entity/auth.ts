export class AuthData {
    constructor(
        public readonly type: string,
        public readonly token: string,
        public readonly refreshToken: boolean,
    ) { }
}