export declare class UserController {
    getUser(request: Request): String;
    createUser(): string;
    getOneUser(id: String): {
        id: String;
    };
    updateUser(id: String): {
        message: string;
    };
    deleteUser(id: String): {
        message: string;
    };
}
