import * as mongoose from 'mongoose';
@Provider()
export const mongooseProvider=[
    {
    provider : 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  }
]