DROP TABLE IF EXISTS log;

CREATE TABLE log
(
    id        serial NOT NULL PRIMARY KEY,
    firstName varchar(30),
    lastName  varchar(30),
    timestamp TIMESTAMP
);