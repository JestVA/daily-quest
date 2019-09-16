// https://www.codewars.com/kata/evil-or-odious/train/javascript
const evil = n => ([...n.toString(2)].reduce((a, c) => a + parseInt(c), 0) %2 == 0) ? `It's Evil!` : `It's Odious!`

// Second solution takes on the fact that the regex will match the values in a array of results and you can check that for length to find how many occurences of 1 (the match) were found. Clever!
function evil(n) {
    return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
}
