export interface ILoginQuery {
    username: string;
    password: string;
    expiresInMins?: number;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}
