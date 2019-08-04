const countdown = (value, fn, delay=1000) => {
    fn(value)
    return (value > 0) ? 
    setTimeout(() => countdown(value - 1, fn, delay), delay) :
    value
}

const log = message => console.log(message)

countdown(10, log)