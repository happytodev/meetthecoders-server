'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCodersFieldsToUsersSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      // alter table
      table.decimal('latitude', null).nullable()
      table.decimal('longitude', null).nullable()
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumns('latitude', 'longitude')
    })
  }
}

module.exports = AddCodersFieldsToUsersSchema
