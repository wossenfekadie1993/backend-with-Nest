import { UserDto } from './userDTO/createUserDto.dto';
export declare class UserController {
    createUser(user: {}): {};
    getOneUser(id: String): {
        id: String;
    };
    updateUser(id: String, createUserDto: UserDto): {
        message: string;
    };
    deleteUser(id: String): {
        message: string;
    };
}
