'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LanguagesAddLogoFieldSchema extends Schema {
  up () {
    this.alter('languages', (table) => {
      table.string('logo').nullable()
    })
  }

  down () {
    this.table('languages', (table) => {
      table.dropColumns('logo')
    })
  }
}

module.exports = LanguagesAddLogoFieldSchema
