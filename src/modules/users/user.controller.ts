import { Body, Controller, Get, Param, Post, Query, UsePipes } from "@nestjs/common";
import { CreateUserDTO } from "./dto/user.dto";
import { CreateUserUseCase } from "./useCases/create-user.usecase";
import { CreateUserValidationPipe } from "./pipe/create-user-validation.pipe";

type ParamsUser = {
    id: string
}

type QueryUser = {
    page: string
    limit: string
}

@Controller("/users")
export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    // query params
    @Get('/findByPages')
    getUsersByPage(@Query() queries: QueryUser): string {
        return `Users page ${queries.page} and limit ${queries.limit}`
    } 
    
    // url params
    @Get('/:id')
    getUserById(@Param() params: ParamsUser): string {
        return `User ID ${params.id}`
    }

    // body
    @Post()
    @UsePipes(new CreateUserValidationPipe())
    async create(@Body() data: CreateUserDTO) {
        return await this.createUserUseCase.execute(data)
    }


}