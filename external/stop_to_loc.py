import csv

f = open("bus.csv", "r")
bus = csv.reader(f)
import pdb
pdb.set_trace()
for row in bus:
    print(row)

    