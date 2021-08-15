import json

from django.test import TestCase
from django.test.client import Client
from django.urls import reverse

from .ExtraFunctions.helperFunctions import CreateTableQuery_Function

# Create your tests here.


class CreateTableTestCase(TestCase):
    '''
       Create Table Test Case
    '''

    def setUp(self):
        self.client = Client()
        self.url = reverse('createTable')
        self.newdata = {
            "schema": {
                "nodes": [
                    {
                        "id": "Column-1",
                        "content": "Column-1",
                        "coordinates": [
                            333,
                            183
                        ],
                        "data":{

                        },
                        "inputs": [
                            {
                                "id": "port-column-1"
                            }
                        ]
                    },
                    {
                        "id": "Table-1",
                        "content": "Table-1",
                        "coordinates": [
                            100,
                            10
                        ],
                        "data":{

                        },
                        "outputs": [
                            {
                                "id": "table-1"
                            }
                        ]
                    }
                ],
                "links": [
                    {
                        "input": "port-column-1",
                        "output": "table-1"
                    }
                ]
            },
            "rowData": {
                "data": [
                    {
                        "id": "Column-1",
                        "column_name": "name",
                        "data_type": "varchar",
                        "max_length": 71,
                        "primary_key": 'false',
                        "unique": 'true',
                        "not_null": 'true'
                    }
                ]
            },
            "tableData": {
                "data": [
                    {
                        "id": "Table-1",
                        "table_name": "Table-1"
                    }
                ]
            }
        }

    def test_valid_response_send(self):
        response = self.client.post(
            self.url,
            data=json.dumps(self.newdata),
            content_type='application/json'
        )
        data = CreateTableQuery_Function(self.newdata)
        self.assertJSONEqual(str(response.content, encoding='utf8'), data)
        self.assertEquals(response.status_code, 200)

    def test_invalid_request_type(self):
        response = self.client.get(
            self.url
        )
        data = {"error": "Invalid Request Type, recieved GET instead of POST"}
        self.assertJSONEqual(str(response.content, encoding='utf8'), data)
        self.assertEquals(response.status_code, 200)
