import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name:{type:String,}
    email:{type:String,required:true},
    password:String
})