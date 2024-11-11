import { Body, Controller, Get, Param, Post, Query, Request, UseGuards, UsePipes } from "@nestjs/common";
import { CreateUserDTO } from "./dto/user.dto";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { CreateUserValidationPipe } from "./pipe/create-user-validation.pipe";
import { AuthGuard } from "src/infra/providers/auth-guard.provider";
import { ProfileUseCase } from "./useCases/profile.usecase";

type ParamsUser = {
    id: string
}

type QueryUser = {
    page: string
    limit: string
}

@Controller("/users")
export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly profileUseCase: ProfileUseCase
    ) {}
    
    // body
    @Post()
    @UsePipes(new CreateUserValidationPipe())
    async create(@Body() data: CreateUserDTO) {
        return await this.createUserUseCase.execute(data)
    }

    @Get('/profile')
    @UseGuards(AuthGuard)
    async profile(@Request() req) {
        const user = await this.profileUseCase.execute(req.user.sub)
        return user
    }


}