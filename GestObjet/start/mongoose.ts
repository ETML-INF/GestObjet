import mongoose from 'mongoose'
import env from '#start/env'

const mongoURI = env.get('MONGO_URL', 'mongodb://localhost:27017/gestobjet')
await mongoose
  .connect(mongoURI)
  .then(() => console.log('mongo connecter'))
  .catch((err) => console.error('erreur de connexion', err))
