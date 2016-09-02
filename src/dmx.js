export default class DMX {
  constructor() {
    this.universes = {}
  }
  register(universe, driver, device) {
    const Driver = require(`./drivers/${driver}.js`)
    return this.universes[universe] = new Driver(device)
  }
}
