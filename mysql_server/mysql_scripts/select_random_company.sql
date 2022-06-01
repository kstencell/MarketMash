SELECT *
  FROM market_cap AS r1 JOIN
       (SELECT CEIL(RAND() *
                     (SELECT MAX(`rank`)
                        FROM market_cap)) AS `rank`)
        AS r2
 WHERE r1.`rank` >= r2.`rank`
 ORDER BY r1.`rank` ASC
 LIMIT 1