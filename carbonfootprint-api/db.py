from neo4j import GraphDatabase
import os


def _connection_driver():
    driver = GraphDatabase.driver(
        os.environ['neo4j_url'],
        auth=("neo4j",
              os.environ['neo4j_password']))
    return driver


class TotalDistanceTravalled(object):
    def get_total_distance(self):
        return 3600
