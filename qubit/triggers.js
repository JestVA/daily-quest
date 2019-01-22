module.exports = function triggers (options, cb) {
  const poller = require('@qubit/poller')
  let currentUrl = options.getBrowserState().then(state => {
    return state.url
  })
  if (currentUrl) {
    poller('.scroll-inner', cb)
  }
}