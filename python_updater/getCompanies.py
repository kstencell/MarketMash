import mysql.connector
import csv
import requests

CSV_URL = 'https://companiesmarketcap.com/?download=csv'

mydb = mysql.connector.connect(
  host= 'db',
  user="root",
  password="JGXZ0Ds9jKCH2NAbnVHB",
  database="marketmash",
  port=3306
)

print(mydb)

mycursor = mydb.cursor()

# RECREATE TABLE IN DATABASE
mycursor.callproc('RecreateCompaniesTable')


# GET UPDATED CSV AND INSERT INTO DATABASE
with requests.Session() as s:
    download = s.get(CSV_URL)
    decoded_content = download.content.decode('utf-8')
    cr = csv.reader(decoded_content.splitlines(), delimiter=',')
    my_list = list(cr)

    sql = "INSERT INTO companies (`rank`, name, symbol, market_cap, price, country) VALUES (%s, %s, %s, %s, %s, %s)"

    #there's some junk at the beginning of the list
    for row in my_list[2:102]:
        val = (row[0], row[1], row[2], row[3], row[4], row[5])
        print(val)
        mycursor.execute(sql, val)
    
    mydb.commit()

print(mycursor.rowcount, "record inserted")