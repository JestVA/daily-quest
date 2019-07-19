const obj1 = { foo: 'bar', x: true }
const obj2 = { foo: undefined, y: {} }

// Clone my obj
const clonedObj1 = { ...obj1 }

const mergedObj = { ...obj1, ...obj2 }
// object{ foo:undefined, x:true, y:{} }

