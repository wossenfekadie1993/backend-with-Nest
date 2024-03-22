import * as mongoose from 'mongoose';
import {Provider} from '@nestjs/common';
import {DATABASE_CONNECTION} from '../constants'
export const databaseProviders :Provider[] =
[
    {
    provide : DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://127.0.0.1/users'),
  }
]