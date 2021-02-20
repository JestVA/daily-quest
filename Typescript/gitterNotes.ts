/*

getUsers(): Promise<Payload | DataError | ServerError > { //if ok return payload, // if data error return {type: 'DataError' } // if server error return {type: 'ServerError'}

I generally model generic errors like { type: 'Error', message: string }

getUsers.then( if res.type === 'Payload' return <Table/> if res.type === 'DataError' return <CorruptedData/> if res.type === 'ServerError' return <ServerError />

but you only need to check for that .type thing because you have a cardinality of 3 you handle 3 cases
instead of checking all of the possible issues by nesting them, which is what happens if you had a product instead of a sum (union)

*/
