import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contient'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Clé étrangère vers objets
      table.integer('objet_id').unsigned().references('id').inTable('objets').onDelete('CASCADE')

      // Clé étrangère vers salles
      table.integer('salle_id').unsigned().references('id').inTable('salles').onDelete('CASCADE')

      // Empêche les doublons (un objet ne peut pas être 2 fois dans la même salle)
      table.unique(['objet_id', 'salle_id'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
