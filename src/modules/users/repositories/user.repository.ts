import { CreatedUserDTO, CreateUserDTO } from "../dto/user.dto";

export abstract class IUserRepository {
    abstract save(user: CreateUserDTO): Promise<CreatedUserDTO>;
    abstract findUserByEmail(email: string): Promise<any>;
    abstract findUserByUsername(username: string): Promise<any>;
    abstract findUserById(id: string): Promise<any>;
}