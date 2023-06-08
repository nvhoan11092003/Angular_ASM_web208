export interface IUser {
    id?: number | string,
    name: string,
    number : number
    email : string,
    password: string,
    confirmPassword : string
    role? : string 
    
}

export interface IUsersignin {
    email: string,
    password : string,   
}