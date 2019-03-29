// Link to kata: https://www.codewars.com/kata/minecraft-series-number-2-minimum-amount-of-fuel-needed-to-get-some-iron-ingots/train/javascript
const calcFuel = (n, t=n*11) => {

    const stick = 1
    const wood = 15
    const coal = 80
    const blazeRod = 120
    const lava = 800
    
    let result = {
      lava: 0,
      blazeRod: 0,
      coal: 0,
      wood: 0,
      stick: 0,
    }

    switch (t >= lava || t >= blazeRod || t >= coal || t >= wood || t >= stick) {
        case t >= lava:
            result.lava = parseInt(t / lava)
            t -= result.lava * lava
            
        case t >= blazeRod:
            result.blazeRod = parseInt(t / blazeRod)
            t -= result.blazeRod * blazeRod
            
        case t >= coal:
            result.coal = parseInt(t /coal)
            t -= result.coal * coal
            
        case t >= wood:
            result.wood = parseInt(t / wood)
            t -= result.wood * wood
            
        case t >= stick:
            result.stick = parseInt(t / stick)
            t -= result.stick * stick  
    }
    return result 
  };