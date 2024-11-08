import { JwtService } from "@nestjs/jwt";
import { IUserRepository } from "src/modules/users/repositories/user.repository";
import { SignInDTO } from "../dto/sign-in.dto";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from "bcrypt";

@Injectable()
export class SignInUseCase {
    constructor(private jwtService: JwtService, private userRepository: IUserRepository) {

    }

    async execute(data: SignInDTO) {
        const user = await this.userRepository.findUserByUsername(data.username);

        if (!user) {
            throw new UnauthorizedException();
        }

        const isValidPassword = await compare(data.password, user.password);

        if (!isValidPassword) {
            throw new UnauthorizedException();
        }

        const token = await this.jwtService.signAsync({
            sub: user.id,
            username: user.username
        });

        return {
            access_token: token
        }

    }

}