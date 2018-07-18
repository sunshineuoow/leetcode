-- Rising Temperature

SELECT A.Id
FROM Weather A, Weather B
WHERE DATEDIFF(A.RecordDate, B.RecordDate) = 1
AND A.Temperature > B.Temperature;
