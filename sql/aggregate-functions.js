/**
 
Types of aggregate functions:

SUM
COUNT
MIN/MAX
AVG

 */

sql`
    SELECT sum((1 - discount) * unitprice * quantity)
    AS revenue
    FROM OrderDetail
`

// example of consolidating rows to get a sum (how much a certain customer has spent lifetime value...)

sql`
    SELECT c.id, c.name, sum(o.amount) AS totalamount
    FROM CustomerOrder AS o
    INNER JOIN Customer AS c
        ON  o.customerid = c.id
    GROUP BY c.id
`
// Algo is to: 1. Deal with the rows you want to be summed, and deal with the rows that are single entries and cannot be summed (hence the GROUP BY)
// SELECT DICTATES THE ORDER

// String concatenation

sql`SELECT student_name,
         GROUP_CONCAT(test_score)
       FROM student
       GROUP BY student_name;`

sql`SELECT group_concat(productname ORDER BY productname DESC SEPARATOR ', ')
    FROM Product`

// Learn about 'having' clause - where you can't use the 'where' clause - as this is done on a per row basis and we just 'goruped by'

sql`
    SElECT month, 
    sum(amount) AS month_sum
    FROM CustomerOrder
    GROUP BY month
    HAVING sum(amount) >= 300 
`

// Subquery 
// Cannot mutate data
// Think mySQL does not support ORDER BY in subquery

sql`
SELECT * 
FROM Product
WHERE categoryid=(
    SELECT id 
    FROM category
    WHERE categoryname='Beverages'
)`
