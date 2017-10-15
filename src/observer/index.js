
class Observer {
  constructor () {
    this.subs = {}
  }

  /**
   * Register a callback to a key
   * @param  {String} key
   * @param  {Function} handler
   */
  register (key, handler) {
    if (!this.subs[key]) this.subs[key] = []
    this.subs[key].push(handler)
  }

  /**
   * Notify a key calling your handler
   * @param  {String} key
   */
  notify (key) {
    if (!this.subs[key]) return
    this.subs[key].map((handler) => handler())
  }
}

export default Observer
