import ParserInterface from '../ParserInterface'

class PugEngine extends ParserInterface {

  /**
   * Inject template engine module on class
   * @param  {engineModule} engineModule npm module to template engine
   */
  init (engineModule) {
    this.pug = engineModule
  }

  /**
   * Compile function
   * @param  {String} string String to compile
   * @return {String}
   */
  compile (string) {
    const render = this.pug.compile(string)
    return render()
  }
}

export default PugEngine
