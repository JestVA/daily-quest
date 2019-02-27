/* 
Example of object factory.
*/

const dog = () => {
    const sound = 'woof'
    return {
        bark: () => console.log(sound)
    }
}

const dita = dog()
dita.bark()

/* 
Avoiding this binding and new keyword
associated with class instantiation.
*/