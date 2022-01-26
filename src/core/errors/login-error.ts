import { DomainError } from "./domain-error";

export class LoginError extends Error implements DomainError {
    constructor(
        public readonly message: string,
        public emailInvalid?: string,
        public passwordInvalid?: string,
    ) {
        super(message);
    }
}