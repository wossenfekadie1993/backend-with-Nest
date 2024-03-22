import { Document } from "mongodb"
export interface User extends {
    name:String,
    email:String,
    password:String
}