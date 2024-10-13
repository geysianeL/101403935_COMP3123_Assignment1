# COMP 3123 – Full Stack Development – I

Student#: 101403935
Student Name: Geysiane Lopes Bezerra


## Requirements

- Docker
- Docker Compose

## How to run
 
In terminal, navigate to the folder `src`

```
cd src
```

then, run the `docker compose up` command

on windows/mac:
```
docker-compose up
```

on linux:
```
docker compose up
```

## Important URLs

- node project - http://localhost:3000
- mongo-express - http://localhost:8081
  - credentials: admin:pass


## sample data

### Users
- User Creation `POST /api/v1/user/signup`
body:
```json
{
    "username": "geysianel",
    "email": "geysianelopes@hotmail.com",
    "password": "p4WZwbT6KzjasevS9rDmuF"
}
``` 

- User Login `POST /api/v1/user/login`
body:
```json
{
    "email": "geysianelopes@hotmail.com",
    "password": "p4WZwbT6KzjasevS9rDmuF"
}
``` 

### Employees

- Create employee `POST /api/v1/emp/employees`

body:
```json
{
 "first_name": "gey",
 "last_name": "lopes",
 "email": "geylopes@hotmail.com",
 "position": "developer",
 "salary": 100000,
 "date_of_joining": "2024-01-01",
 "department": "IT"
}
```

- List employees `GET /api/v1/emp/employees`

- Get specified employee `GET /api/v1/emp/employees/:eid`
where `:eid` is the `_id` received when you list all employees

- Update employee `PUT /api/v1/emp/employees/:eid`
where `:eid` is the `_id` received when you list all employees

body:
```json
{
 "first_name": "lopes",
 "last_name": "geysiane",
 "email": "lopesgey@hotmail.com",
 "position": "jr developer",
 "salary": 60000,
 "date_of_joining": "2024-02-01",
 "department": "IT Development"
}
```

- Delete specified employee `DELETE /api/v1/emp/employees?eid=:eid`
where `:eid` is the `_id` received when you list all employees