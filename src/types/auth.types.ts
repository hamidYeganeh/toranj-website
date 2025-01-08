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

export interface ILoginResponse extends IUser {
    accessToken: string;
    refreshToken: string;
}

export interface IAuth {
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: IUser | null;
}
