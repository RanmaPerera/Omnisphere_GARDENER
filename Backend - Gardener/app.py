from flask_cors import CORS
from flask import Flask, jsonify
import mysql.connector
mydb = mysql.connector.connect(host="localhost", user="root", passwd="", database="gardener")
mycursor = mydb.cursor()
app = Flask(__name__)
cors = CORS(app)
plantSuggestionList = {"suggestedPlants":[]}
plantSuggestionArray = []

plantDetailsList = {"plantDetails":[]}
plantDetailsArray = []

availablePlantList = []
weekOneGuidelines = []
weekTwoGuidelines = []
weekThreeGuidelines = []
weekFourGuidelines = []
weekFiveGuidelines = []
weekSixGuidelines = []
weekSevenGuidelines = []
weekEightGuidelines = []
@app.route('/')
def hello_world():
    return jsonify('Hello World!')

@app.route('/plantSuggestion/<userDistrict>')
def get_plants(userDistrict):
    mycursor.execute("SELECT Plant_Name FROM plant_suggestion WHERE District='%s'" % (userDistrict))
    DistrictExist = mycursor.fetchall()
    plantSuggestionArray.clear()
    if DistrictExist:
        for plant in DistrictExist:
            plantSuggestionArray.append(plant)
        plantSuggestionList["suggestedPlants"] = plantSuggestionArray
        return jsonify(plantSuggestionList)
    else:
        return jsonify("status:0")

@app.route('/plantDetails/<userPlant>')
def get_plant_details(userPlant):
    mycursor.execute("SELECT * from plant_suggestion WHERE Plant_Name='%s'" % (userPlant))
    plantExistInDistrict = mycursor.fetchone()
    plantDetailsList.clear()
    if plantExistInDistrict:
        print("\nDETAILS OF SELECTED PLANT")

        print("plant name: " + plantExistInDistrict[1])
        print("Required field size: " + plantExistInDistrict[2])
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

        for plant in plantExistInDistrict:
            plantDetailsArray.append(plant)
        plantDetailsList["suggestedPlants"] = plantDetailsArray
        return jsonify(plantDetailsList)
    else:
        return jsonify("status:0")

@app.route('/availablePlants')
def display_available_plants():
    mycursor.execute("SELECT Plant FROM journal")
    plantExist = mycursor.fetchall()
    availablePlantList.clear()
    if plantExist:
        for plant in plantExist:
            availablePlantList.append(plant)
        return jsonify(availablePlantList)
    else:
        return jsonify("status:0")

@app.route('/week1/<userPlant>')
def display_week1_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekOneGuidelines.clear()
    if plantExist:
        print('field size: ' + plantExist[1])
        print("water supply: " + plantExist[2])
        print("soil processing: " + plantExist[3])
        print("ground processing: " + plantExist[4])
        print("sunlight requirement: " + plantExist[5])
        print("seed requirement: " + plantExist[6])
        print("space between holes: " + plantExist[7])
        print("seeds per hole: " + plantExist[8])
        print("fertilizer requirement: " + plantExist[9])

        # for plant in plantExist:
        #     weekOneGuidelines.append(plant)
        weekOneGuidelines.append(plantExist[1])
        weekOneGuidelines.append(plantExist[2])
        weekOneGuidelines.append(plantExist[3])
        weekOneGuidelines.append(plantExist[4])
        weekOneGuidelines.append(plantExist[5])
        weekOneGuidelines.append(plantExist[6])
        weekOneGuidelines.append(plantExist[7])
        weekOneGuidelines.append(plantExist[8])
        weekOneGuidelines.append(plantExist[9])
    else:
        return jsonify("status:0")
    return jsonify(weekOneGuidelines)

@app.route('/week2/<userPlant>')
def display_week2_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekTwoGuidelines.clear()
    if plantExist:

        print("Week 2 Water Supply: " + plantExist[10])
        print("Week 2 Fertilizer: " + plantExist[11])
        print("Week 2 Weed Management: " + plantExist[12])
        print("Week 2 Guideline: " + plantExist[13])

        weekTwoGuidelines.append(plantExist[10])
        weekTwoGuidelines.append(plantExist[11])
        weekTwoGuidelines.append(plantExist[12])
        weekTwoGuidelines.append(plantExist[13])
    else:
        return jsonify("status:0")
    return jsonify(weekTwoGuidelines)

@app.route('/week3/<userPlant>')
def display_week3_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekThreeGuidelines.clear()
    if plantExist:
        print("Week 3 Water Supply: " + plantExist[14])
        print("Week 3 Fertilizer 1 : " + plantExist[15])
        print("Week 3 Fertilizer 2: " + plantExist[16])
        print("Week 3 Weed Management:  " + plantExist[17])
        print("Week 3 Guideline:  " + plantExist[18])

        weekThreeGuidelines.append(plantExist[14])
        weekThreeGuidelines.append(plantExist[15])
        weekThreeGuidelines.append(plantExist[16])
        weekThreeGuidelines.append(plantExist[17])
        weekThreeGuidelines.append(plantExist[18])
    else:
        return jsonify("status: 0")
    return jsonify(weekThreeGuidelines)

@app.route('/week4/<userPlant>')
def display_week4_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekFourGuidelines.clear()
    if plantExist:
        print("Week 4 Water Supply: " + plantExist[19])
        print("Week 4 Fertilizer 1 : " + plantExist[20])
        print("Week 4 Guideline 1: " + plantExist[21])
        print("Week 4 Guideline 2:  " + plantExist[22])

        weekFourGuidelines.append(plantExist[19])
        weekFourGuidelines.append(plantExist[20])
        weekFourGuidelines.append(plantExist[21])
        weekFourGuidelines.append(plantExist[22])

    else:
        return jsonify("status: 0")
    return jsonify(weekFourGuidelines)

@app.route('/week5/<userPlant>')
def display_week5_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekFiveGuidelines.clear()
    if plantExist:
        print("Week 5 Water Supply: " + plantExist[23])
        print("Week 5 Fertilizer 1 : " + plantExist[24])
        print("Week 5 Fertilizer 2 : " + plantExist[25])
        print("Week 5 Guideline 1:  " + plantExist[26])
        print("Week 5 Guideline 2:  " + plantExist[27])

        weekFiveGuidelines.append(plantExist[23])
        weekFiveGuidelines.append(plantExist[24])
        weekFiveGuidelines.append(plantExist[25])
        weekFiveGuidelines.append(plantExist[26])
        weekFiveGuidelines.append(plantExist[27])

    else:
        return jsonify("status: 0")
    return jsonify(weekFiveGuidelines)

@app.route('/week6/<userPlant>')
def display_week6_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekSixGuidelines.clear()
    if plantExist:
        print("Week 6 Water Supply: " + plantExist[28])
        print("Week 6 Fertilizer 1 : " + plantExist[29])
        print("Week 6 Fertilizer 2 : " + plantExist[30])
        print("Week 6 Weed Management:  " + plantExist[31])


        weekSixGuidelines.append(plantExist[28])
        weekSixGuidelines.append(plantExist[29])
        weekSixGuidelines.append(plantExist[30])
        weekSixGuidelines.append(plantExist[31])


    else:
        return jsonify("status: 0")
    return jsonify(weekSixGuidelines)

@app.route('/week7/<userPlant>')
def display_week7_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekSevenGuidelines.clear()
    if plantExist:
        print("Week 7 Water Supply: " + plantExist[32])
        print("Week 7 Fertilizer 1 : " + plantExist[33])
        print("Week 7 Fertilizer 2 : " + plantExist[34])
        print("Week 7 Guidelines :  " + plantExist[35])


        weekSevenGuidelines.append(plantExist[32])
        weekSevenGuidelines.append(plantExist[33])
        weekSevenGuidelines.append(plantExist[34])
        weekSevenGuidelines.append(plantExist[35])


    else:
        return jsonify("status: 0")
    return jsonify(weekSevenGuidelines)

@app.route('/week8/<userPlant>')
def display_week8_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekEightGuidelines.clear()
    if plantExist:
        print("Week 8 Water Supply: " + plantExist[35])
        print("Week 8 Weed Management : " + plantExist[36])
        print("Week 8 Guideline : " + plantExist[37])


        weekEightGuidelines.append(plantExist[35])
        weekEightGuidelines.append(plantExist[36])
        weekEightGuidelines.append(plantExist[37])


    else:
        return jsonify("status: 0")
    return jsonify(weekEightGuidelines)


if __name__ == '_main_':
    app.run()