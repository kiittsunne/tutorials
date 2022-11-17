SET SQL_SAFE_UPDATES = 0;
UPDATE hdb_property_info
SET bldg_contract_town = 
CASE 
	when bldg_contract_town = 'AMK' then 'ANG MO KIO'
    when bldg_contract_town = 'BB' then 'BUKIT BATOK'
    when bldg_contract_town = 'BD' then 'BEDOK'
    when bldg_contract_town = 'BH' then 'BISHAN'
    when bldg_contract_town = 'BM' then 'BUKIT MERAH'
    when bldg_contract_town = 'BP' then 'BUKIT PANJANG'
    when bldg_contract_town = 'BT' then 'BUKIT TIMAH'
    when bldg_contract_town = 'CCK' then 'CHOA CHU KANG'
    when bldg_contract_town = 'CL' then 'CLEMENTI'
    when bldg_contract_town = 'CT' then 'CENTRAL AREA'
    when bldg_contract_town = 'GL' then 'GEYLANG'
    when bldg_contract_town = 'HG' then 'HOUGANG'
    when bldg_contract_town = 'JE' then 'JURONG EAST'
    when bldg_contract_town = 'JW' then 'JURONG WEST'
    when bldg_contract_town = 'KWN' then 'KALLANG/WHAMPOA'
    when bldg_contract_town = 'MP' then 'MARINE PARADE'
    when bldg_contract_town = 'PG' then 'PUNGGOL'
    when bldg_contract_town = 'PRC' then 'PASIR RIS'
    when bldg_contract_town = 'QT' then 'QUEENSTOWN'
    when bldg_contract_town = 'SB' then 'SEMBAWANG'
    when bldg_contract_town = 'SGN' then 'SERANGOON'
    when bldg_contract_town = 'SK' then 'SENGKANG'
    when bldg_contract_town = 'TAP' then 'TAMPINES'
    when bldg_contract_town = 'TG' then 'TENGAH'
    when bldg_contract_town = 'TP' then 'TOA PAYOH'
    when bldg_contract_town = 'WL' then 'WOODLANDS'
    when bldg_contract_town = 'YS' then 'YISHUN'
    else bldg_contract_town
	END;