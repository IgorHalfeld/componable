
class ParserInterface {

  /**
   * Force to initialize the module
   */
  init () {
    return new Error('Parser init not implemented yet')
  }

  /**
   * Force to call compile function on template engine
   */
  compile () {
    return new Error('Parser compile not implemented yet')
  }
}

export default ParserInterface
