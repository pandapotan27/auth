# auth

TUTORIAL DEPLOYING IN GOOGLE CLOUD

A. Create SQL (MYSQL) in Google Cloud
  - Create Database auth-api-db
  - Konfigurasi Istance
B. Create User Databases
C. Create Service Accounts
D. Write .env connection information
E. Create Table API

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

F. Create VM Instancec in Compute Engine
G. Open SSH
H. Clone Repository Github in SSH
I. Install Library 

Framework Express:
- npm install express
MySQL Driver:
- npm install mysql2
Body Parser:
- npm install body-parser
Dotenv untuk environment variables:
- npm install dotenv
bcryptjs untuk hashing password:
- npm install bcryptjs
Jsonwebtoken untuk token:
- npm install jsonwebtoken

J. Run the Node app.js server
H. Write the Endpoint plus the external IP of the VM instance

TEST ENDPOINT IN POSTMAN

AUTHTENTICATION REGISTER 
1. Method POST
2. Input Url Endpoint
3. Body, Raw Type JSON
4. Json Test 

{
  "username": "user",
  "email": "user@gmail.com",
  "password": "user123"
}
5. Response Success
{
    "error": false,
    "message": "User created"
}

![image](https://github.com/user-attachments/assets/81a5b17a-3f41-4ac7-93bd-3cbfff9e3970)



AUTHENTICATION LOGIN 
1. Method POST
2. Input Url Endpoint
3. Body, Raw Type JSON
4. JSON test 

{
  "email": "user@gmail.com",
  "password": "user123"
}
5. Response Success

{
    "error": false,
    "message": "Success",
    "loginResult": {
        "userId": 15,
        "name": "user",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE3MzQwNTU5OTAsImV4cCI6MTczNDA1OTU5MH0.IDNMWAhna8egJX3ifiZN2wGuM5ndDx4EvFOZ6TRwoBk"
    }
}

![image](https://github.com/user-attachments/assets/2897f3d5-6403-483a-b326-84d19c7a50c8)
