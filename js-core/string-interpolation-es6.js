const PersonME = name => {
    const person = {
        userName: name,
        pronoun: 'He / Him'
    }
    
    const info = {
        company: 'Mine',
        action: 'mastered',
        adverb: 'quickly'
    }
    
    const message = `This is a story about ${person.userName}. ${person.pronoun} is ${info.adverb} learning about string interpolation`

    return message
}

