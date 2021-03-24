import mysql.connector

mydb = mysql.connector.connect(host = "localhost", user = "root", passwd = "", database = "gardener_database")

mycursor = mydb.cursor()

mycursor.execute("select * from 'disease_prevention' where Disease = 'fungus'")

for i in mycursor:
    print(i)