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


// Querying across tables (with JOINS - two most important are INNER and OUTER jois )

// INNER JOIN brings back only results that exist in both tables

// CustomerOrder and Customer and two different tables 


// Watch out for SELECT * when working with inner joins as it will bring all columns (Like ID will be 2 x times which is not good)
sql`
SELECT *
FROM CustomerOrder AS o 
INNER JOIN Customer AS c
    ON o.customerid = c.id
` 

// Now selecting only the entities that we want:

sql`
SELECT o.CustomerId,
o.amount,
c.name
FROM CustomerOrder AS o
INNER JOIN Customer AS c 
    ON o.CustomerId = c.id
`
// diff left join example

sql`
SELECT p.* FROM Product AS p
    LEFT JOIN Supplier AS s
        ON p.id = s.id
`

