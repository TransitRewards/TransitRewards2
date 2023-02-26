import csv
from random import randint
f = open("busstops.csv", "r")
bus = csv.reader(f)

a=set()
for c, row in enumerate(bus):
    if c!=0:
        a.add(row[0])
d = {}
for i in a:
    d[i] = round(randint(100,10000), -2)

#convert dictionary to json
import json
aa =json.loads(json.dumps(d))
f = open("busstop_highestBID.json","w")
print(aa,file=f)
f.close()