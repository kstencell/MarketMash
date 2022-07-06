CREATE DEFINER=`root`@`%` PROCEDURE `RecreateCompaniesTable`()
BEGIN
	DROP TABLE IF EXISTS companies;
	CREATE TABLE companies (
	`rank` int not null primary key,
	`name` varchar(255) not null,
    `symbol` varchar (30) not null,
    `market_cap` bigint unsigned not null,
    `price` float not null,
    `country` varchar(255) not null
);
END