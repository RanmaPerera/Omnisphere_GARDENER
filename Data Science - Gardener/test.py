def menu():
    print("[1] Plant Suggestion") 
    print("[2] Disease Prevention")
    print("[3] Farmer Journal")
    print("[0] Exit!!!!")

import mysql.connector
mydb = mysql.connector.connect(host="localhost", user="root", passwd="", database="gardener_database")
mycursor = mydb.cursor()

menu()
option = int(input("Enter Your Option: "))

while option != 0:
    if option == 1:
        #output the plants of entered district
        userDistrict=str(input("Enter Your District: "))
        mycursor.execute("SELECT Plant_Name FROM plant_suggestion WHERE District='%s'" % (userDistrict))
        DistrictExist = mycursor.fetchall()
        if DistrictExist:
            for plant in DistrictExist:
                print(plant)
        else:
            print(userDistrict + " Doesn't Exist!")

        #output the details of selected plant
        userPlant=str(input("Enter a plant: "))
        mycursor.execute("SELECT * from plant_suggestion WHERE District='%s' AND Plant_Name='%s'" % (userDistrict,userPlant))

        plantExistInDistrict = mycursor.fetchone()
        if plantExistInDistrict:
            print("\n DETAILS OF SELECTED PLANT")
           
            print("plant name: " + plantExistInDistrict[1])
            print ("Required field size: " + plantExistInDistrict[2])
            print("Soil preparation of the field: " + plantExistInDistrict[3])
            print("Space between each plant: " + plantExistInDistrict[4])
            print("Deep of each hole: " + plantExistInDistrict[5])
            print("Seed Requirement: " + plantExistInDistrict[6])
            print("Seed per hole: " + plantExistInDistrict[7])
            print("Water supply for the field: " + plantExistInDistrict[8])
            print("Suitable Fertilizers: " + plantExistInDistrict[9])
            print("Fertilizer requirement: " + plantExistInDistrict[10])
            print("Sunlight requirement: " + plantExistInDistrict[11])
            print("Weed management: " + plantExistInDistrict[12])
        else:
            print("plant is not include in " + userDistrict)

    elif option == 2:
        #Disease Prevention Menu
        plantDisease=str(input("Enter the Plant Disease: " + "\n"))

        mycursor.execute("SELECT Affected_Plant FROM disease_prevention WHERE Disease='%s'" % (plantDisease))
        diseaseExit=mycursor.fetchall()
        if diseaseExit:
           for plant in diseaseExit:
               print(plant)
        else:
            print(plantDisease + " doesn't exist !!!")
        
        affectedPlant = str(input("Enter the Plant Name: " + "\n"))
        mycursor.execute("SELECT * FROM disease_prevention WHERE Affected_plant='%s' AND Disease='%s'"%(affectedPlant,plantDisease))
        diseaseIncludePlant=mycursor.fetchone()
        if diseaseIncludePlant:
            print("\n DETAILS OF SELECTED DISEASE")

            print('disease name: '+diseaseIncludePlant[0])
            print('field size: '+diseaseIncludePlant[2])
            print('organic treatement 1: '+diseaseIncludePlant[3])
            print('organic treatement 2: '+diseaseIncludePlant[4])
            print('chemical treatement 1: '+diseaseIncludePlant[5])
            print('chemical treatement 2: '+diseaseIncludePlant[6])
            print('chemical treatement 3: '+diseaseIncludePlant[7])
            print('water combination: '+diseaseIncludePlant[8])
        else:
            print("Disease Not Include In..." + affectedPlant)
        
    elif option == 3:
        #Weekly Journal Menu
        print("Farmer Journal Has Been Called!!!")
    else:
        print("Invalid Option!! Please Re-Enter....")
    
    print()
    menu()
    option = int(input("Enter Your Option: "))

print("Thanks For Using Gardener!!!")