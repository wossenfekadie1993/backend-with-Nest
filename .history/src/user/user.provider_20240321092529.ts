import { Connection } from "mongoose";
import { UserSchema } from "./schemas/user.schema";
import {USER_MODEL,DATABASE_CONNECTION} from '../constants';

export const UsersProvider =[
    {
    provide: ,
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
    }
]
