import { Connection } from "mongoose";
import { UserSchema } from "./schemas/user.schema";

export const UsersProvider =[
    {
        provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', CatSchema),
    inject: ['DATABASE_CONNECTION'],
    }
]