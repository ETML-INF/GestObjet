import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import Type from '#models/type'
import Salle from '#models/salle'
import type { ManyToMany, BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Objet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare qrCode: string

  // Clé étrangère pour le Type
  @column()
  declare typeId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relation : Un objet appartient à un Type
  @belongsTo(() => Type)
  declare type: BelongsTo<typeof Type>

  // Relation : Un objet est dans des salles (via la table pivot 'contient')
  @manyToMany(() => Salle, {
    pivotTable: 'contient',
  })
  declare salles: ManyToMany<typeof Salle>
}
