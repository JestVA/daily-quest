
// Can you guess what's inside this function?

const GREETING = function(sentence) { 
    const stringIn = ', New Year\'s Eve is here!'
    const MESSAGE = `${sentence}${stringIn}`
        for (let i = 0; i < stringIn.length; i += 10) {
            console.log(MESSAGE)
    }
}

GREETING('Let\'s party')


/**

It prints:
Let's party, New Year's Eve is here!
Let's party, New Year's Eve is here!
Let's party, New Year's Eve is here!

**/
