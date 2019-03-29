// Link to kata: https://www.codewars.com/kata/minecraft-series-number-2-minimum-amount-of-fuel-needed-to-get-some-iron-ingots/train/javascript
const calcFuel = (n, t=n*11) => {

    const stick = 1
    const wood = 15
    const coal = 80
    const blazeRod = 120
    const lava = 800
    
    result = {
      lava: 0,
      blazeRod: 0,
      coal: 0,
      wood: 0,
      stick: 0,
    }
    
    // Need to build some logic to loop these values 
    if (t >= lava) {
      result.lava = parseInt(t / lava)
    } else if (t >= blazeRod) {
      result.blazeRod = parseInt(t / blazeRod)
    } else if (t >= coal) {
      result.coal = parseInt(t /coal)
    } else if (t >= wood) {
      result.wood = parseInt(t / wood)
    } else if (t >= stick) {
      result.stick = parseInt(t / stick)
    }
  
    console.log(t)
  
    return result
  
  };