import csv
import json

csvfile = open('commits.log', 'r')
jsonfile = open('commits.json', 'w')

fieldnames = ("hash","name","time","message")
reader = csv.DictReader( csvfile, fieldnames)
#skipping over the headings
next(reader)
out = json.dumps( {"commit":[{"hash":row["hash"],"name":row["name"],"time":row["time"],"message":row["message"]} for row in reader]})
jsonfile.write(out)