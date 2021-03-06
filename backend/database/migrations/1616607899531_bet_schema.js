'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BetSchema extends Schema {
  up() {
    this.create('bets', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .notNullable()
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .notNullable()

      table.string('numbers').notNullable()
      table.float('price').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('bets')
  }
}

module.exports = BetSchema
