'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LanguagesSchema extends Schema {
  up () {
    this.create('languages', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('languages')
  }
}

module.exports = LanguagesSchema
