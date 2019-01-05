// 8 kyu 'Does play banjo?'
const areYouPlayingBanjo = name => {
    switch (name.slice(0, 1)) {
      case 'R':
        return `${name} plays banjo`
        break
      case 'r':
        return `${name} plays banjo`
        break
      default:     
        return `${name} does not play banjo`
    }
  }