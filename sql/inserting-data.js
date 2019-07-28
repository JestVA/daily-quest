// Creating Records
sql`
    INSERT INTO Customer
    VALUES (8424, 'Tanner Thompson', 'Likes scotch')
`

// DELETING 

// delete a table completely
sql`
    DROP TABLE Customer;
`

// delete all records from a table
sql`
    DELETE FROM Customer;
`

// delete one or more rows leaving the rest intact
sql`
    DELETE FROM Customer;
    WHERE name = 'Juice'
`