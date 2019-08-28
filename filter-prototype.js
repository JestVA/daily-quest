Array.prototype.filter = function(data) {
    const args = this
    const truthy = args.map(itm => data(itm))
    
    console.log(truthy)
    
    const res = [];
    
    for(let i = 0; i < truthy.length; i++)
    {
      console.log(args[i])
      if(truthy[i] == true)
        res.push(args[i]);
    }
    
    return res
  
  }