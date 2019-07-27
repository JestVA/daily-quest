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
