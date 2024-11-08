import { Body, Controller, Post } from "@nestjs/common";
import { SignInDTO } from "./dto/sign-in.dto";
import { SignInUseCase } from "./useCases/sign-in.usecase";


@Controller()
export class LoginController {
    constructor(private signInUseCase: SignInUseCase) {}

    @Post('/login')
    async signIn(@Body() data: SignInDTO) {
        const accessToken = await this.signInUseCase.execute(data)
        return accessToken
    }
}