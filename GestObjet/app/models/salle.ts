import mongoose, { Schema, Document } from 'mongoose'

export interface ISalle extends Document {
  numero: string
  batiment: string
  objets: mongoose.Types.ObjectId[]
}

const SalleSchema = new Schema(
  {
    numero: { type: String, required: true },
    batiment: { type: String, required: true },

    // Liste des objets dans la salle
    objets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Objet',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<ISalle>('Salle', SalleSchema)
