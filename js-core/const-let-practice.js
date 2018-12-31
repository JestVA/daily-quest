
const GREETING = function(sentence) { 
    const stringIn = ', New Year\'s Eve is here!'
    const MESSAGE = `${sentence}${stringIn}`
        for (let i = 0; i < stringIn.length; i += 10) {
            console.log(MESSAGE)
    }
}

GREETING('Let\'s party')



