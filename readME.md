# Simple Notes Service

A minimal Express + SQLite-based REST API for creating and fetching notes.

---

## Prerequisites

- **Node.js** (v14 or later)  
- **npm** (comes with Node.js)



## If node modules are not present then run 'npm i' 

## To run this just use 'npm start' 

#notes.db can be deleted the new DB will be created on it's own if it is not present 

**In this project have used local database sqlite**

#THE FOLLOWING ARE THE CURL COMMANDS#


//--> To Create Notes

curl --location 'http://localhost:3001/api/v1/takeNotes' \
--header 'Content-Type: application/json' \
--data '{
    "user_id": "5",
    "title":   "Grocery list_2",
    "content": "– Milk, Eggs, Bread, toast"
  }'


//--> To View All Notes

curl --location 'http://localhost:3001/api/v1/viewNotes' \
--header 'Content-Type: application/json' \
--data ''


//--> To View Specific a Note

curl --location 'http://localhost:3001/api/v1/viewNotes/cb1a74aa-a909-425d-8ae4-12947b414553' \
--header 'Content-Type: application/json' \
--data ''

## SAMPLE RESPONSE
```JS
{
    "id": "cb1a74aa-a909-425d-8ae4-12947b414553",
    "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "title": "Grocery list",
    "content": "– Milk, Eggs, Bread",
    "created_at": "2025-04-29T21:43:45.821Z",
    "updated_at": "2025-04-29T21:43:45.821Z"
}
```


