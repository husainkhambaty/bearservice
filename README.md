# BearService

## URLs to access the BearService

Use these URLs to hit perform different operations on the API service

URL | REQUEST TYPE | DESCRIPTION
------------ | ------------- | -------------
http://localhost:8080/bears | GET | Get all the available bears
http://localhost:8080/bears | POST | Create a new Bear with a name
http://localhost:8080/bears/:bear_id | GET | Get the Bear using an ID
http://localhost:8080/bears/:bear_id | PUT | Update the Bear name using an ID
http://localhost:8080/bears/:bear_id | DELETE | Delete the Bear using an ID


## Prerequisites

You need _Mongodb_ to be installed and started to be able to use this application. Alternatively you can signup for a free Mongodb service online and configure the creds in the server.js file. Mongodb usually runs on the 27017 port. 

## Usage

You can hit the above URLs or you can use a tool such as SoapUI to be able to run tests with different request types to the URLs.
