-- Classed More Than 5 Students

SELECT class FROM courses GROUP BY class HAVING Count(DISTINCT student) >= 5;