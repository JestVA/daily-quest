module.exports = function variation (options) {
  let hidePlayerBets = Array.from(document.querySelectorAll('.scroll-inner>li')).filter(el => {
    return el.textContent === 'Player Bets'
  })
  if (hidePlayerBets.length > 0) {
    hidePlayerBets[0].classList.add('removePlayerBets')
  }
}