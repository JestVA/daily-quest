import {
    getDb
} from '../db/utils'
import {
    sql
} from '../sql-string'

const ALL_EMPLOYEES_COLUMNS = [
    'id',
    'firstname',
    'lastname',
    'region',
    'hiredate',
    'title',
    'reportsto'
]

export async function getAllEmployees() {
    const db = await getDb()
    return await db.all(sql `SELECT ${ALL_EMPLOYEES_COLUMNS.join(',')} FROM Employee`)
}

export async function getEmployee(id) {
    const db = await getDb()
    return await db.get(
        sql `
        SELECT *
        FROM Employee
        WHERE id = $1
        `, id
    )
}