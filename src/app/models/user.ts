export interface IUser {
    id: number;
    userName: String;
    firstName: String;
    lastName: String;
    email: String;
    enabled: boolean;
    expired: boolean;
    locked: boolean;
    lastPasswordReset: String;
}
