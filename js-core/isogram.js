const isIsogram = str => {
    const letterList = str.toLowerCase().split('')
    return letterList.map((l, e)=>{
      
      return letterList.filter((letter, key)=>{
        return l === letter 
      }).length
    }).filter(n => n == 1 ).length === str.length
}