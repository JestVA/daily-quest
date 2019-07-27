import {
    getDb
} from '../db/utils'
let db = await getDb()
// Retrieve a collection of records
let allEmployees = await db.all(sql `SELECT * FROM Employee`)
// Retrieve a single record
let product71 = await db.get(sql `SELECT * FROM Product WHERE id = $1`, 71)
// Execute a statement, and return the last inserted ID (if applicable)
let {
    id
} = await db.run(sql `INSERT INTO Customer VALUES(...)`)