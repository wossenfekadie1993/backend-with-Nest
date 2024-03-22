import * as mongoose from 'mongoose';
import {provider} from '@ne'
export const databaseProviders =[
    {
    provider : 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  }
]