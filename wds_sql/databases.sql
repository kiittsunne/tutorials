-- CREATE DATABASE test_db; 
-- DROP DATABASE test_db; 
-- CREATE DATABASE record_company;
-- USE record_company; 
-- CREATE TABLE test_table (
--     test_column INT
-- );
-- ALTER TABLE test_table
-- ADD another_test_column VARCHAR(255); 
-- DROP TABLE test_table; 

-- CREATE DATABASE record_company;

-- USE record_company; 

-- CREATE TABLE bands (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE albums (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     release_year INT,
--     band_id INT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (band_id) REFERENCES bands(id)
-- );

-- INSERT INTO record_company.bands (name)
-- VALUES ('ヨルシカ'), ('ヨアソビ'), ('ヒゲダン');

-- SELECT * FROM bands; 

-- SELECT * FROM bands LIMIT 2; 

-- SELECT name FROM bands; -- get name col only
-- SELECT id AS 'ID' FROM bands; -- alias select

-- SELECT id AS 'ID', name as 'Band Name'
-- FROM bands; -- multiple alias

-- SELECT * FROM bands ORDER BY name; -- names in alphabetical order (asc by default)

-- SELECT * FROM bands ORDER BY name DESC; -- reverse alphabetical order

-- INSERT INTO albums (name, release_year, band_id)
-- VALUES ('The Book', 2021, 2),
--        ('Elma', 2019, 1),
--        ('Escaparade', 2018, 3);

-- SELECT * FROM albums;