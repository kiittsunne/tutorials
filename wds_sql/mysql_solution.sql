use world;
show tables;

-- Clue #1: We recently got word that someone fitting Carmen Sandiego's description has been traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed, so find the least populated country in Southern Europe, and we'll start looking for her there.

select region, name, code, population from country
where region = "Southern Europe"
order by population asc
limit 1;

-- # region	name	code	population
-- Southern Europe	Holy See (Vatican City State)	VAT	1000

-- == -- 

-- Clue #2: Now that we're here, we have insight that Carmen was seen attending language classes in this country's officially recognized language. Check our databases and find out what language is spoken in this country, so we can call in a translator to work with you.

select language, countrycode as code from countrylanguage
where countrycode = "VAT";

-- # language	code
-- Italian	VAT

-- == -- 

-- Clue #3: We have new news on the classes Carmen attended: our gumshoes tell us she's moved on to a different country, a country where people speak only the language she was learning. Find out which nearby country speaks nothing but that language.

select ita.countrycode, ita.total_lang, ita.language, name, region, population from country
inner join (
	select cl_agg.countrycode, cl_agg.total_lang, language from countrylanguage
	inner join (
		select countrycode, count(language) as total_lang
		from countrylanguage
		group by countrycode
		having total_lang = 1
	) cl_agg
	on cl_agg.countrycode = countrylanguage.countrycode
	having countrylanguage.language = "Italian"
) ita
on ita.countrycode = country.code; 

-- # countrycode	total_lang	language	name	region	population
-- SMR	1	Italian	San Marino	Southern Europe	27000
-- VAT	1	Italian	Holy See (Vatican City State)	Southern Europe	1000

-- == --

-- Clue #4: We're booking the first flight out: maybe we've actually got a chance to catch her this time. There are only two cities she could be flying to in the country. One is named the same as the country – that would be too obvious. We're following our gut on this one; find out what other city in that country she might be flying to.

select name from city where countrycode = "SMR" and name not in ("San Marino");

-- # name
-- Serravalle

-- == --

-- Clue #5: Oh no, she pulled a switch: there are two cities with very similar names, but in totally different parts of the globe! She's headed to South America as we speak; go find a city whose name is like the one we were headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!

select country.region, country.code, country.name as country_name, city.name as city_name
from city
inner join country on country.code = city.countrycode
where country.region = "South America" and city.name like "Se%";

-- # region	code	country_name	city_name
-- South America	BRA	Brazil	Serra	<-- probably this one
-- South America	BRA	Brazil	Sete Lagoas
-- South America	BRA	Brazil	Sertãozinho

-- == --

-- Clue #6: We're close! Our South American agent says she just got a taxi at the airport, and is headed towards the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll follow right behind you!

select country.name as country_name, city.* from city
join country on country.capital = city.id
where country.name = "Brazil";

-- # country_name	ID	Name	CountryCode	District	Population
-- Brazil	211	Brasília	BRA	Distrito Federal	1969868

-- == --

-- Clue #7: She knows we're on to her: her taxi dropped her off at the international airport, and she beat us to the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the landing dock.
-- Clue #8 Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but if we can crack it, we can finally put her where she belongs – behind bars.

--   Our playdate of late has been unusually fun –
--   As an agent, I'll say, you've been a joy to outrun.
--   And while the food here is great, and the people – so nice!
--   I need a little more sunshine with my slice of life.
--   So I'm off to add one to the population I find
--   In a city of ninety-one thousand and now, eighty five.

select country.name as country_name, country.code, city.name, city.district, city.population from city
join country on country.code = city.countrycode
where city.population = 91084;

-- # country_name	code	name	district	population
-- United States	USA	Santa Monica	California	91084


