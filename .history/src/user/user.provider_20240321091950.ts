import { Connection } from "mongoose";
import { UserSchema } from "./schemas/user.schema";

export const UsersProvider =[
    {
        provide: 'User_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: ['DATABASE_CONNECTION'],
    }
]