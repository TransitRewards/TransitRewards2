import csv

f = open("busstops.csv", "r")
bus = csv.reader(f)

a={}
for c, row in enumerate(bus):
    if c!=0:
        key = row[0]
        val = {'stop_name': row[2], 'stop_lat': row[4], 'stop_lon': row[5]}
        a[key] = val


import json
aa =json.loads(json.dumps(a))

f = open("bus.json", "w")
print(aa, file = f)
f.close()