'use strict'

const Language = use('App/Models/Language')

class LanguageController {
  async get () {
    const languages = await Language.all()
    return languages
  }
}

module.exports = LanguageController
