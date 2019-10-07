'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LanguagesAddPictureFieldSchema extends Schema {
  up () {
    this.alter('languages', (table) => {
      table.string('picture').nullable()
    })
  }

  down () {
    this.table('languages', (table) => {
      table.dropColumns('picture')
    })
  }
}

module.exports = LanguagesAddPictureFieldSchema
