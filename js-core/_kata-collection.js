// 8 kyu 'Does play banjo?'
const areYouPlayingBanjo = name => {
    switch (name.slice(0, 1)) {
      case 'R':
      case 'r':
        return `${name} plays banjo`
        break
      default:     
        return `${name} does not play banjo`
    }
  }
// other solutions
const areYouPlayingBanjo = name => name +  (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + ' banjo'