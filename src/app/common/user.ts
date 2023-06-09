export interface IUsersignin {
    email: string,
    password: string,
}

export interface IUsersignup {
    name: string,
    number : number
    email : string,
    password: string,
    confirmPassword : string
}
export interface IUserdata {
    accessToken? : string
    message ? : string
    user: {
        _id: number | string,
        email: string,
        password: string,
        number: number,
        role : string }
}

