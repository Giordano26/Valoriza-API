# Valoriza API - Compliments system with messages

## System Rules
### <strong>User Sign Up : </strong>
- Registering with an user with the same email is prohibited 
- Registering an user without an email is prohibited

### <strong>Tag Register :</strong>
- Registering a tag with the same name is prohibited
- Registering a tag without a the field name is prohibited
- Registering tags are only authorized for system admins

### <strong>Compliment Register :</strong>
- Registering a compliment for itself is prohibited
- Registering a compliment for an invalid user is prohibited
- The user must be authenticated on the application

## Instructions to run 

### <strong>Local Test :</strong>
- `npm i` will install the project dependencies
- `npm run dev` will run the database + API

## Routes
- base_url : `http://localhost:3000`
### <strong> WARNING! </strong>
- Some functionalities are only available to admins

### Users
- <strong>(POST)</strong> Create User : `http://localhost:3000/users` <p>
Create a register of an user on the database
	
```json
request body:

{
	"name" : "Test User",
    	"email" : "user@test.com",
	"password": "12345",
	"admin": false
}

```
- <strong>(POST)</strong> Authenticate User : `http://localhost:3000/login` <p>
Create an auth token to ensure the user is logged on the system

```json
request body:

{
    	"email" : "user@test.com",
	"password":  "12345"
}

response body: Generated JSON Web Token

```
- <strong>(GET)</strong> List All Users: `http://localhost:3000/users` <p>
List all registered users on database

```json
Auth: Bearer <login token>

no request body
    
```


### Tags
- <strong>(POST)</strong> Create a tag on database : `http://localhost:3000/tags` <p>

```json
Auth: Bearer <login token>

request body: 
{
    "name" : "<tag name>"
}

```

- <strong>(GET)</strong> List all tags on database : `http://localhost:3000/tags` <p>

```json
Auth: Bearer <login token>

no request body

```

### Compliments
- <strong>(POST)</strong> Create a compliment to other user : `http://localhost:3000/compliments` <p>

```json
Auth: Bearer  <login token>

request body: 
{
    	"tag_id": "<tag id on database>",
	"user_receiver": "<user id receiver database>",
	"message": "put a nice message here"
}
```
- <strong>(GET)</strong> List all compliments sended by an user (based on login token): `http://localhost:3000/users/compliments/send` <p>

```json
Auth: Bearer <login token>

no request body
```

- <strong>(GET)</strong> List all compliments received by an user (based on login token): `http://localhost:3000/users/compliments/receive` <p>

```json
Auth: Bearer <login token>

no request body
```
## Dependencies 

- [Express](https://expressjs.com/pt-br/)
- [BCryptjs](https://www.npmjs.com/package/bcryptjs)
- [Class Transformer](https://github.com/typestack/class-transformer)
- [JSON Web Token](https://jwt.io/)
- [Sqlite3](https://www.sqlite.org/index.html)
- [Typeorm](https://typeorm.io/#/)
- [uuid](https://www.npmjs.com/package/uuid)
