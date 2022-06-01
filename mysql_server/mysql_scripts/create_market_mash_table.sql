DROP TABLE IF EXISTS market_cap;

CREATE TABLE market_cap (
	`rank` int not null primary key,
	`name` varchar(255) not null,
    `symbol` varchar (30) not null,
    `market_cap` bigint unsigned not null,
    `price` float not null,
    `country` varchar(255) not null
);