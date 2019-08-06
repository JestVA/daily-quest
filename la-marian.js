// const flatArray = [[[true]]].flatMap(x => x.flatmap(x => x))
const flatArray2 = [[true]].flatMap(x => x)

// Using a variable in path definitions url 
let path = '/details/:id'

// The : in a path definition acts as a variable definition - so the path created -- supposed I am using a thing like Reach Router will create all the paths that have an id 

import Router from 'reach-router'

<Router>
    <SearchParams path='/details/:id' />
</Router>

