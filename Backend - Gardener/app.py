from flask_cors import CORS
from flask import Flask, jsonify
import mysql.connector
mydb = mysql.connector.connect(host="localhost", user="root", passwd="", database="gardener")
mycursor = mydb.cursor(buffered=True)
app = Flask(__name__)
cors = CORS(app)

plantSuggestionList = {"suggestedPlants":[]}
plantSuggestionArray = []

plantDetailsList = {"plantDetails":[]}
plantDetailsArray = []


journal = {"journalDetails":[]}
journalArray = []


weekOneGuidelines = {"fieldSize":"", "waterSupply":"", "soilProcessing":"","groundProcessing":"","sunlightRequirement":"","seedRequirement":"","spaceBetweenHoles":"","seedsPerHole":"","fertilizerRequirement":"","weedManagement":"","careGuideline":""}
weekTwoGuidelines = {"fieldSize":"", "waterSupply":"", "soilProcessing":"","groundProcessing":"","sunlightRequirement":"","seedRequirement":"","spaceBetweenHoles":"","seedsPerHole":"","fertilizerRequirement":"","weedManagement":"","careGuideline":""}
weekThreeGuidelines = {"fieldSize":"", "waterSupply":"", "soilProcessing":"","groundProcessing":"","sunlightRequirement":"","seedRequirement":"","spaceBetweenHoles":"","seedsPerHole":"","fertilizerRequirement":"","weedManagement":"","careGuideline":""}
weekFourGuidelines = {"fieldSize":"", "waterSupply":"", "soilProcessing":"","groundProcessing":"","sunlightRequirement":"","seedRequirement":"","spaceBetweenHoles":"","seedsPerHole":"","fertilizerRequirement":"","weedManagement":"","careGuideline":""}
weekFiveGuidelines = {"fieldSize":"", "waterSupply":"", "soilProcessing":"","groundProcessing":"","sunlightRequirement":"","seedRequirement":"","spaceBetweenHoles":"","seedsPerHole":"","fertilizerRequirement":"","weedManagement":"","careGuideline":""}
weekSixGuidelines = {"fieldSize":"", "waterSupply":"", "soilProcessing":"","groundProcessing":"","sunlightRequirement":"","seedRequirement":"","spaceBetweenHoles":"","seedsPerHole":"","fertilizerRequirement":"","weedManagement":"","careGuideline":""}
weekSevenGuidelines = {"fieldSize":"", "waterSupply":"", "soilProcessing":"","groundProcessing":"","sunlightRequirement":"","seedRequirement":"","spaceBetweenHoles":"","seedsPerHole":"","fertilizerRequirement":"","weedManagement":"","careGuideline":""}
weekEightGuidelines = {"fieldSize":"", "waterSupply":"", "soilProcessing":"","groundProcessing":"","sunlightRequirement":"","seedRequirement":"","spaceBetweenHoles":"","seedsPerHole":"","fertilizerRequirement":"","weedManagement":"","careGuideline":""}

allWeeksGuidelines={"weekOneGuidelines":weekOneGuidelines,"weekTwoGuidelines":weekTwoGuidelines,"weekThreeGuidelines":weekThreeGuidelines,
                    "weekFourGuidelines":weekFourGuidelines,"weekFiveGuidelines":weekFiveGuidelines,"weekSixGuidelines":weekSixGuidelines,
                    "weekSevenGuidelines":weekSevenGuidelines,"weekEightGuidelines":weekEightGuidelines}


diseaseDetailsArray = {"Disease":"", "Plant":"", "Guide1":"", "Guide2":"", "Guide3":""}


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

@app.route('/diseaseDetails/<identifiedDisease>')
def get_disease(identifiedDisease):
    mycursor.execute("SELECT * FROM disease WHERE disease='%s' " % (identifiedDisease))
    DiseaseExist = mycursor.fetchone()

    print(DiseaseExist)
    diseaseDetailsArray.clear()
    if DiseaseExist:

        print("Disease: " + DiseaseExist[0])
        print("Plant: " + DiseaseExist[1])
        print("Guide1: " + DiseaseExist[2])
        print("Guide2: " + DiseaseExist[3])
        print("Guide3: " + DiseaseExist[4])

        diseaseDetailsArray["Disease"]=(DiseaseExist[0])
        diseaseDetailsArray["Plant"]=(DiseaseExist[1])
        diseaseDetailsArray["Guide1"]=(DiseaseExist[2])
        diseaseDetailsArray["Guide2"]=(DiseaseExist[3])
        diseaseDetailsArray["Guide3"]=(DiseaseExist[4])

    else:
        return jsonify("status:0")
    return jsonify(diseaseDetailsArray)


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

@app.route('/journal/<journalPlant>')
def get_journal(journalPlant):
    mycursor.execute("SELECT * FROM journal  WHERE Plant = '%s'" % (journalPlant))
    plantExistInJournal = mycursor.fetchall()
    journal.clear()
    if plantExistInJournal:
        for plant in plantExistInJournal:
            journalArray.append(plant)
            journal["Jorunal Suggested Plants"] = journalArray
            return jsonify(journal)
        else:
            return jsonify("status:0")


@app.route('/journalDetails/<userPlant>')
def display_week1_guidelines(userPlant):
    mycursor.execute("SELECT * FROM journal WHERE Plant='%s' " % (userPlant))
    plantExist = mycursor.fetchone()
    weekOneGuidelines.clear()
    weekTwoGuidelines.clear()
    weekThreeGuidelines.clear()
    weekFourGuidelines.clear()
    weekFiveGuidelines.clear()
    weekSixGuidelines.clear()
    weekSevenGuidelines.clear()
    weekEightGuidelines.clear()
    if plantExist:
        print('field size: ' + plantExist[1])
        print("water supply: " + plantExist[8])
        print("soil processing: " + plantExist[2])
        print("ground processing: " + plantExist[3])
        print("sunlight requirement: " + plantExist[4])
        print("seed requirement: " + plantExist[5])
        print("space between holes: " + plantExist[6])
        print("seeds per hole: " + plantExist[7])
        print("fertilizer requirement: " + plantExist[9])
        print("weed Management : " + plantExist[12])
        print("care Guideline : " + plantExist[13])


        weekOneGuidelines["fieldSize"]=(plantExist[1])
        weekOneGuidelines["waterSupply"]=(plantExist[8])
        weekOneGuidelines["soilProcessing"]=(plantExist[2])
        weekOneGuidelines["groundProcessing"]=(plantExist[3])
        weekOneGuidelines["sunlightRequirement"]=(plantExist[4])
        weekOneGuidelines["seedRequirement"]=(plantExist[5])
        weekOneGuidelines["spaceBetweenHoles"]=(plantExist[6])
        weekOneGuidelines["seedsPerHole"]=(plantExist[7])
        weekOneGuidelines["fertilizerRequirement"]=(plantExist[9])
        weekOneGuidelines["weedManagement"]=(plantExist[12])
        weekOneGuidelines["careGuideline"]=(plantExist[13])

        weekTwoGuidelines["fieldSize"] = (plantExist[1])
        weekTwoGuidelines["waterSupply"] = (plantExist[8])
        weekTwoGuidelines["soilProcessing"] = (plantExist[2])
        weekTwoGuidelines["groundProcessing"] = (plantExist[3])
        weekTwoGuidelines["sunlightRequirement"] = (plantExist[4])
        weekTwoGuidelines["seedRequirement"] = (plantExist[5])
        weekTwoGuidelines["spaceBetweenHoles"] = (plantExist[6])
        weekTwoGuidelines["seedsPerHole"] = (plantExist[7])
        weekTwoGuidelines["fertilizerRequirement"] = (plantExist[9])
        weekTwoGuidelines["weedManagement"] = (plantExist[12])
        weekTwoGuidelines["careGuideline"] = (plantExist[13])


        weekThreeGuidelines["fieldSize"] = (plantExist[1])
        weekThreeGuidelines["waterSupply"] = (plantExist[8])
        weekThreeGuidelines["soilProcessing"] = (plantExist[2])
        weekThreeGuidelines["groundProcessing"] = (plantExist[3])
        weekThreeGuidelines["sunlightRequirement"] = (plantExist[4])
        weekThreeGuidelines["seedRequirement"] = (plantExist[5])
        weekThreeGuidelines["spaceBetweenHoles"] = (plantExist[6])
        weekThreeGuidelines["seedsPerHole"] = (plantExist[7])
        weekThreeGuidelines["fertilizerRequirement"] = (plantExist[9])
        weekThreeGuidelines["weedManagement"] = (plantExist[12])
        weekThreeGuidelines["careGuideline"] = (plantExist[13])

        weekFourGuidelines["fieldSize"] = (plantExist[1])
        weekFourGuidelines["waterSupply"] = (plantExist[8])
        weekFourGuidelines["soilProcessing"] = (plantExist[2])
        weekFourGuidelines["groundProcessing"] = (plantExist[3])
        weekFourGuidelines["sunlightRequirement"] = (plantExist[4])
        weekFourGuidelines["seedRequirement"] = (plantExist[5])
        weekFourGuidelines["spaceBetweenHoles"] = (plantExist[6])
        weekFourGuidelines["seedsPerHole"] = (plantExist[7])
        weekFourGuidelines["fertilizerRequirement"] = (plantExist[9])
        weekFourGuidelines["weedManagement"] = (plantExist[12])
        weekFourGuidelines["careGuideline"] = (plantExist[13])


        weekFiveGuidelines["fieldSize"] = (plantExist[1])
        weekFiveGuidelines["waterSupply"] = (plantExist[8])
        weekFiveGuidelines["soilProcessing"] = (plantExist[2])
        weekFiveGuidelines["groundProcessing"] = (plantExist[3])
        weekFiveGuidelines["sunlightRequirement"] = (plantExist[4])
        weekFiveGuidelines["seedRequirement"] = (plantExist[5])
        weekFiveGuidelines["spaceBetweenHoles"] = (plantExist[6])
        weekFiveGuidelines["seedsPerHole"] = (plantExist[7])
        weekFiveGuidelines["fertilizerRequirement"] = (plantExist[9])
        weekFiveGuidelines["weedManagement"] = (plantExist[12])
        weekFiveGuidelines["careGuideline"] = (plantExist[13])

        weekSixGuidelines["fieldSize"] = (plantExist[1])
        weekSixGuidelines["waterSupply"] = (plantExist[8])
        weekSixGuidelines["soilProcessing"] = (plantExist[2])
        weekSixGuidelines["groundProcessing"] = (plantExist[3])
        weekSixGuidelines["sunlightRequirement"] = (plantExist[4])
        weekSixGuidelines["seedRequirement"] = (plantExist[5])
        weekSixGuidelines["spaceBetweenHoles"] = (plantExist[6])
        weekSixGuidelines["seedsPerHole"] = (plantExist[7])
        weekSixGuidelines["fertilizerRequirement"] = (plantExist[9])
        weekSixGuidelines["weedManagement"] = (plantExist[12])
        weekSixGuidelines["careGuideline"] = (plantExist[13])

        weekSevenGuidelines["fieldSize"] = (plantExist[1])
        weekSevenGuidelines["waterSupply"] = (plantExist[8])
        weekSevenGuidelines["soilProcessing"] = (plantExist[2])
        weekSevenGuidelines["groundProcessing"] = (plantExist[3])
        weekSevenGuidelines["sunlightRequirement"] = (plantExist[4])
        weekSevenGuidelines["seedRequirement"] = (plantExist[5])
        weekSevenGuidelines["spaceBetweenHoles"] = (plantExist[6])
        weekSevenGuidelines["seedsPerHole"] = (plantExist[7])
        weekSevenGuidelines["fertilizerRequirement"] = (plantExist[9])
        weekSevenGuidelines["weedManagement"] = (plantExist[12])
        weekSevenGuidelines["careGuideline"] = (plantExist[13])

        weekEightGuidelines["fieldSize"] = (plantExist[1])
        weekEightGuidelines["waterSupply"] = (plantExist[8])
        weekEightGuidelines["soilProcessing"] = (plantExist[2])
        weekEightGuidelines["groundProcessing"] = (plantExist[3])
        weekEightGuidelines["sunlightRequirement"] = (plantExist[4])
        weekEightGuidelines["seedRequirement"] = (plantExist[5])
        weekEightGuidelines["spaceBetweenHoles"] = (plantExist[6])
        weekEightGuidelines["seedsPerHole"] = (plantExist[7])
        weekEightGuidelines["fertilizerRequirement"] = (plantExist[9])
        weekEightGuidelines["weedManagement"] = (plantExist[12])
        weekEightGuidelines["careGuideline"] = (plantExist[13])

    else:
        return jsonify("status:0")
    return jsonify(allWeeksGuidelines)


if __name__ == '_main_':
    app.run()