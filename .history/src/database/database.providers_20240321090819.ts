import * as mongoose from 'mongoose';
import {Provider} from '@nestjs/common';

export const databaseProviders =[
    {
    provider : 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  }
]