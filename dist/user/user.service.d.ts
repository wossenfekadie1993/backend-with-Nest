import { UserDto } from './userDTO/createUserDto.dto';
export declare class UserService {
    private readonly users;
    createUser(user: UserDto): void;
    getUsers(): UserDto[];
}
