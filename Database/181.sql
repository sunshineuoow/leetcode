-- Employees Earning More Than Their Managers

SELECT A.Name AS Employee
FROM Employee A, Employee B
WHERE A.ManagerId = B.Id
AND A.salary > B.salary;