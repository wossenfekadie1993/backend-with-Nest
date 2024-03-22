import * as mongoose from 'mongoose';
@provider
export const mongooseProvider=[
    {
    provider : 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  }
]