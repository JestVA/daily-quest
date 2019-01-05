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

// include regular expression 

'Dorin'.match(/^d/i) // evaluates if both 'd' or 'D' are the first letter of string
const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? ' plays' : ' does not play') + ' banjo';

/*
understanding the logic behind regex better:

('dorin'.match(/^d/i) == 'd') == true  
true // evaluates to true 
*/
