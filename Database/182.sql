-- Duplicate Emails

SELECT Email FROM Person GROUP By Email Having Count(*) > 1;