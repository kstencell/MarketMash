CREATE DEFINER=`root`@`%` PROCEDURE `GetTwoRandomCompanies`()
BEGIN
	DECLARE random1 INT DEFAULT 0;
    DECLARE random2 INT DEFAULT 0;
	DECLARE max_rank INT DEFAULT 0;
    
    SELECT MAX(`rank`)
    INTO max_rank
    FROM companies;

    SELECT CEIL(RAND() * max_rank)
    INTO random1;
    
    SELECT CEIL(RAND() * max_rank)
    INTO random2;
    
    IF random1 = random1 AND random1 = max_rank THEN
		SET random2 = random1-1;
	ELSE
		SET random2 = random1+1;
	END IF;
    
	SELECT `rank`, `name`, `symbol`, `market_cap`, `price`, `country`
	FROM companies AS r1 
	WHERE r1.`rank` = random1 OR r1.`rank` = random2
	ORDER BY r1.`rank` ASC
	LIMIT 2;
END