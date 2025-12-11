import mongoose, { Schema, Document } from 'mongoose'

export interface IType extends Document {
  libelle: string
  createdAt: Date
  updatedAt: Date
}

const TypeSchema = new Schema(
  {
    libelle: { type: String, required: true },
  },
  {
    timestamps: true, // Gère automatiquement createdAt et updatedAt
  }
)

export default mongoose.model<IType>('Type', TypeSchema)
