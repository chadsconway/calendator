# connecting

connectionURL: http://localhost:8984/rest/.

root url lists all available databases

http://localhost:8984/rest

resources of database listed by specifying database:

http://localhost:8984/rest/database

get the contents with:

http://localhost:8984/rest/database/database.xml

# parameters

- variables
- context provide context node
- options applied before actual operations
- serialization

# POST method

body is interpreted as XML fragment, name of root element determines how its evaluated:

- commands
- query
- run
- command
