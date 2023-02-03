# Database structure

Besides the items listed, some additional information is to be stored in the database:

* weather
  * T high per day/week
  * T low per day/week
  * amount of rain
  * amount of sunlight
* fertilizing
* talcum

```mermaid
flowchart LR
    subgraph Harvests
        hid[int, unique: id]
        hyear[int: year]
        hyield[double: yield]
        hplants[int: n_plants]
        hcid[int crop_id]
        hdate_plant[String: date_planted]
        hdate_harvest[String: date_harvested]
    end
    subgraph Plants
        cid[int, unique: crop_id]
        cname[String: race]
        ckind[String: kind]
        cavyield[Double: average_yield]
        cdistance_1[Double: plant_distance_plants]
        cdistance_2[Double: plant_distance_rows]
    end
    subgraph Seasons
        syear[int, unique: year]
        sstate[bool: active]
        sharvests[array: int id]
    end
    
    hcid --> cid
    sharvests --> hid
```

