import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Object from '#models/objet'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Salle extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numero: string

  @column()
  declare batiment: string

  @manyToMany(() => Object, {
    pivotTable: 'contient',
  })
  declare objects: ManyToMany<typeof Object>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
