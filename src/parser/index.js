import _ from 'lodash'

import ParserComposite from './ParserComposite'
import PugImplementation from './pug'

const parserComposite = new ParserComposite()
parserComposite.add('pug', PugImplementation)

/**
 * Set template engine to all application
 * @param {String} engineName   Engine name
 * @param {Object} engineModule npm module to template engine
 */
export const setTemplateEngine = (engineName, engineModule) =>
  parserComposite[engineName].init(engineModule)

/**
 * Parse all template
 * @param {String} template String to parse
 */
export const ParserTemplate = (template) => {
  const engines = Object.keys(parserComposite)
  const onlyHasUniqueEngine = 1

  // TODO: Not works
  const engine = _.reject(engines, ['compile', 'init'])

  if (engine === onlyHasUniqueEngine) {
    return parserComposite[...engine].compile(template)
  }

  return new Error('You need have only 1 template engine')
}
