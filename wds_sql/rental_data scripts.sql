USE rental_data;
select * from monthly_rental_data;
select * from hdb_property_info;
select distinct town from monthly_rental_data;
select distinct bldg_contract_town from hdb_property_info;

select avg(monthly_rent) from monthly_rental_data;

select flat_type, count(flat_type) from monthly_rental_data
group by flat_type;

select propinfo.bldg_contract_town, count(propinfo.total_dwelling_units)
from hdb_property_info as propinfo
group by propinfo.bldg_contract_town;

