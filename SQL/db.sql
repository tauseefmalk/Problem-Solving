-- 1. write a sql querry to retrieve all employee who joined in the year 2023, reagrdless of the specific date like joining like date_of_Joinig 

-- SELECT * 
-- FROM employee 
-- WHERE YEAR(date_of_Joinig) = 2023;

-- 2. SQL querry to get employees with the second most recent joining date 

-- SELECT * 
-- FROM employee 
-- WHERE date_of_Joinig = (
--     SELECT MAX(date_of_Joinig) 
--     FROM employee 
--     WHERE date_of_Joinig < 
--     SELECT MAX(date_of_Joinig) 
--     FROM employee);

-- design a relationship where each user has one manager 

-- aik manager ka table banega or aik user ka table 

-- CREATE TABLE USER (
--     id INT PRIMARY KEY,
--     name VARCHAR(50),
--     manager_id INT, 
--     FOREIGN KEY (manager_id) REFERENCES USER(id)
-- )

--3. what is the difference between WHERE and HAVING CLAUSE

-- When to Use
-- Use **WHERE** when filtering raw data (individual rows).
-- Use **HAVING** when filtering aggregated data (after GROUP BY).
-- You can't use WHERE SUM(quantity) > 15 — that's invalid.

-- where
-- (Filters rows before grouping/aggregation)
-- having 
-- (Filters rows after grouping/aggregation)

-- 4. write a sql querry to find user with username where username start with dev and end with 360

-- SELECT * 
-- FROM user
-- WHERE username LIKE 'dev%360'

-- 5. given a table orders(order_id, customer_id, total), write a sql querry to find the top three customers based on total spending

SELECT customer_id, SUM(total) AS total_spend
from orders
GROUP BY customer_id
ORDER BY total_spend DESC
LIMIT 3