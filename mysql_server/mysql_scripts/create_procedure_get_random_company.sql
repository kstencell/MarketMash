CREATE DEFINER=`root`@`%` PROCEDURE `GetRandomCompany`()
BEGIN
	SELECT companies.`rank`, `name`, `symbol`, `market_cap`, `price`, `country`
	  FROM companies AS r1 JOIN
		   (SELECT CEIL(RAND() *
						 (SELECT MAX(`rank`)
							FROM companies)) AS `rank`)
			AS r2
	 WHERE r1.`rank` >= r2.`rank`
	 ORDER BY r1.`rank` ASC
	 LIMIT 1;
END