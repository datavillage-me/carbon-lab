import json
from footprint import CarCarbonEmissions
from db import TotalDistanceTravalled


def get_carbon_footprint(event, context):
    # Total distance travelled during the year so far
    distance = TotalDistanceTravalled().get_total_distance()

    # Total fuel consumed per km - 10litres/100km

    mileage = 0.1

    footprint = CarCarbonEmissions().carEmissions(distance, mileage)

    return footprint
