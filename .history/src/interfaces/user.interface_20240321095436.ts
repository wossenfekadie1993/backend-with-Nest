import { Document } from "mongodb"
export interface User extends Do{
    name:String,
    email:String,
    password:String
}