This is a freeCodeCamp project. To start camping yourself visit https://www.freecodecamp.org/. 

**API Project:**\
Timestamp Microservice for FCC

**User stories:**\
1. The API endpoint is GET [project_url]/api/timestamp/:date_string?
2. A date string is valid if can be successfully parsed by new Date(date_string) (JS) . Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
4. If the date string is valid the api returns a JSON having the structure {"unix": <date.getTime()>, "utc" : <date.toUTCString()> } e.g. {"unix":1450137600000,"utc":"Tue, 15 Dec 2015 00:00:00 GMT"}.
5. If the date string is invalid the api returns a JSON having the structure 
{"error" : "Invalid Date" }.

**Example usage:**\
*Supply valid epoch timestamp:*\
https://freecodecamp-boilerplate-project-timestamp-15.glitch.me/api/timestamp/1450137600000

*Supply valid natural date timestamp:*\
https://freecodecamp-boilerplate-project-timestamp-15.glitch.me/api/timestamp/2015-12-15

*Supply no timestamp:*\
https://freecodecamp-boilerplate-project-timestamp-15.glitch.me/api/timestamp/

*Supply invalid timestamp:*\
https://freecodecamp-boilerplate-project-timestamp-15.glitch.me/api/timestamp/asdf \
https://freecodecamp-boilerplate-project-timestamp-15.glitch.me/api/timestamp/-

*Example output:*\
{"unix":1450137600000,"utc":"Tue, 15 Dec 2015 00:00:00 GMT"}
