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



  /* WTFUDGE Solution */
  // the power of reduce 
  Array.prototype.filter=function(fn){
    return this.reduce((s,a)=>fn(a)?(s.push(a),s):s,[]);
  }

  [1].reduce((s, a)=> (s.push(a), s) , []) // nice! the paranthesis in the middle was the hardest to figure out: a way to return in line 

  [1].reduce((s, a)=> s.push(a) , []) // nice! the paranthesis in the middle was the hardest to figure out 

  [1].reduce((s, a)=> {
      s.push(a)
        return s
    } , []) // nice! the paranthesis in the middle was the hardest to figure out 

    [1,2,3].reduce((s, a)=> (s.push({ item: a }), s) , [])
    // and this is how to push objects

    // hah coercion bomb
    [1,2,3].reduce((s, a)=> (s.push(({a})), s) , [])
    [1,2,3].reduce((s, a)=> (s.push({ "44": 44 }), s) , [])
