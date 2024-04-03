import { UserDto } from './userDTO/createUserDto.dto';
import { UpdateUserDto } from './userDTO/updateUserDto.dto';
import { UserService } from './user.service';
import { User } from 'src/interfaces/user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<User[]>;
    createUser(createUserDto: UserDto): Promise<User>;
    getUser(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<any>;
}
