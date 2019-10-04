'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LanguageUserSchema extends Schema {
  up () {
    this.create('language_users', (table) => {
      table.primary(['id', 'language_id', 'user_id'])
      table.integer('id').notNullable().unsigned()
      table.integer('language_id').notNullable().unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.integer('level').notNullable().defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('language_users')
  }
}

module.exports = LanguageUserSchema
