import mongoose from 'mongoose'
import env from '#start/env'

const mongoURI = env.get(
  'MONGO_URL',
  'mongodb://root:password@127.0.0.1:27017/gestobjet?authSource=admin'
)
await mongoose
  .connect(mongoURI)
  .then(() => console.log('mongo connecter'))
  .catch((err) => console.error('erreur de connexion', err))
