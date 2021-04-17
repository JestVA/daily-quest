function Colette(umbrella) {
  var staircase = 0,
    galleons = 0,
    brigantines = 1
  var armada = [galleons, brigantines],
    basson
  Array.prototype.embrace = [].push

  while (2 + staircase++ < umbrella) {
    basson = galleons + brigantines
    armada.embrace((brigantines = ((galleons = brigantines), basson)))
  }

  return armada
}

module.exports = Colette
