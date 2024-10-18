import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { CreateUserDTO } from "../dto/user.dto";

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
    transform(value: CreateUserDTO, metadata: ArgumentMetadata) {
        if (!value.email || !value.password || !value.username || !value.name) {
            throw new HttpException('Missing required fields', HttpStatus.UNPROCESSABLE_ENTITY)
        }

        return value;
    }

}