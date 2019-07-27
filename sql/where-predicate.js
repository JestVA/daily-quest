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
