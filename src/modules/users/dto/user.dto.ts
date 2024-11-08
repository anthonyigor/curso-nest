export type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
    username: string;
}

export type CreatedUserDTO = {
    id: string,
    createdAt: Date
} & CreateUserDTO
