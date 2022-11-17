USE record_company;
SELECT * FROM record_company.bands;
SELECT * FROM record_company.bands LIMIT 2; 
SELECT name FROM bands;
SELECT id as 'ID', name as 'Band Name' FROM bands;
INSERT INTO albums (name, release_year, band_id)
VALUES ('The Book', 2021, 2),
       ('Elma', 2019, 1),
       ('Escaparade', 2018, 3);
SELECT * FROM albums;
SELECT DISTINCT name FROM albums; -- get unique data only

UPDATE albums
SET release_year = 2021 -- this alone will update every single album
WHERE id = 1; 
SELECT * FROM albums;

SELECT * FROM albums
WHERE release_year < 2020;

-- WildCards
select * from albums
where name like 'Th%'; -- "%" is anything

select * from albums
where name like 't%' OR band_id = 1; -- AND requries both conditions

select * from albums
where release_year between 2019 and 2021; -- inclusive

INSERT INTO albums (name, release_year, band_id)
VALUES ('Test', null, 1);

select * from albums
where release_year is null;

DELETE FROM albums -- will delete everything in albums by itself
WHERE band_id = 1 and release_year is null;

select * from albums;

select * from bands
join albums on bands.id = albums.band_id;

insert into bands (name) values ('Kenshi Yonezu');
select * from bands;

select albums.name as 'Album Name', albums.id as 'Album ID', bands.id as 'Band ID', bands.name as 'Band Name'
from bands
join albums on bands.id = albums.band_id;


