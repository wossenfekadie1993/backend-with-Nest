import * as mongoose from 'mongoose';
export const mongooseProvider=[
    provider : 'DATABASE_CONNECTION',
    useFactory: async () => await mongoose
]