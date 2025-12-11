import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Objet from '#models/objet'
import type { HasMany } from '@adonisjs/lucid/types/relations'
export default class Type extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare libelle: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relation : Un Type a plusieurs Objets
  @hasMany(() => Objet)
  declare objets: HasMany<typeof Objet>
}
