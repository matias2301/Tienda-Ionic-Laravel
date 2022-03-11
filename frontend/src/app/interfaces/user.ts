export interface UserRegister {    
    name: string,
    email: string,
    password: string,
    role?: string,
    state?: string,    
}
export interface RegisterResponse {
    success: boolean,
    msg: string,
    user: UserResponse
}
export interface LoginResponse {
    // success: boolean,
    // msg: string,
    // user: UserResponse,
    access_token: string,
    expires_at: string,
    token_type: string
}
export interface UserLogin {
    email: string,
    password: string
}
export interface UserResponse {
    id: number,
    name: string,
    email: string,
    email_verified_at: string,
    role: string,
    // state: string,    
    created_at: Date,
    updated_at: Date,
}