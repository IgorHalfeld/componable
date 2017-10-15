
class ParserComposite {
  constructor () {
    this.engine = {}
  }

  /**
   * Add a new template engine
   * @param {String} engineName key to template engine implementation
   * @param {Class} EngineImplementation template engine implementation
   */
  add (engineName, EngineImplementation) {
    this.engine[engineName] = new EngineImplementation()
  }
}

export default ParserComposite
