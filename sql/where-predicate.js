/*

--  SELECT clause
SELECT * FROM Employee
-- WHERE clause 
WHERE id = 123 AND is_admin = 'true'
-- values are returned in the order they were asked (like an [ ] from a low level SQL database)
SELECT id, firstname, lastname FROM Employee
-- single quotes are used for string literals
-- Aliases (use the AS keyword to give a table or a column a local name or alias)
SELECT p.productname AS title FROM Product AS p

*/

/**
 * 
 * Cheatsheet
 * (can be used with WHERE predicates)
 * 
 * age >= 21
 * isDeleted != TRUE
 * temperature BETWEEN 68 AND 75
 * companyname IN ('Microsoft', 'Linkedin')
 * email LIKE '%.gov'
 * summary LIKE '%spicy%'
 * billing_state LIKE '__'
 * 
 */

sql`
SELECT 
    productName
FROM 
    productName
WHERE (
    unitprice > 60
    AND unitsinstock > 20
)
`
sql`
SELECT productname
FROM Product 
WHERE lower(productname) LIKE '%dried%' // (lower, min, max, count, substr ...)

SELECT lower(productname) AS label
FROM Product
`


// FIltering with WHERE clause 

// SORTING 
sql`ORDER BY` // direction: ASC or DESC

sql`
SELECT productname,
unitprice
FROM product
ORDER BY unitprice DESC
`

sql`
SELECT productname, unitprice
FROM Product
WHERE unitprice BETWEEN 9.6 AND 11
ORDER BY unitprice, productname ASC
LIMIT 3
`
// using LIMIT together with OFFSET (we can paginate over a set of results. OFFSET basically means "Start with Nth result")


