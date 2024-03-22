import { UserDto } from './userDTO/createUserDto.dto';
import { UpdateUserDto } from './userDTO/updateUserDto.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("src/interfaces/user.interface").User[]>;
    createUser(createUserDto: UserDto): Promise<import("src/interfaces/user.interface").User>;
    getUser(id: string): Promise<import("src/interfaces/user.interface").User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("src/interfaces/user.interface").User>;
    deleteUser(id: string): Promise<any>;
}
