import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../repositories/user.repository";

@Injectable()
export class ProfileUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(id: string): Promise<any> {
        return await this.userRepository.findUserById(id)
    }

}