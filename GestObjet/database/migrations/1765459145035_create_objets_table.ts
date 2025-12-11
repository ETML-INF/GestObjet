import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'objets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('qr_code').notNullable().unique() // J'ai ajouté unique() car un QR code est généralement unique

      // Clé étrangère vers la table types
      table.integer('type_id').unsigned().references('id').inTable('types').onDelete('CASCADE') // ou 'SET NULL' selon ta logique

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
