# Projet 13 - ArgentBank

The project consists of the creation of a web application, for the new bank Argent Bank,
    allowing customers to log in and manage their accounts and profile as well as a proposal for endpoints
    APIs required for transactions.
    
### 1. Prerequisites

- NodeJS
- MongoDB Community Server
### 2. Installation

You have the choice between yarn and npm

### 2.1 Backend API

Fork an clone the repository https://github.com/Ines-1958/Project-10-Bank-API on your computer.
    Open a terminal window in the cloned project
    Run the following commands:

#### Install dependencies
npm install

#### Start local dev server
npm run dev:server

#### Populate database with two users
npm run populate-db

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!
### 3. Populated Database Data
Once you run the populate-db script, you should have two users in your database:
#### Tony Stark

    First Name: Tony
    Last Name: Stark
    Email: tony@stark.com
    Password: password123

#### Steve Rogers

    First Name: Steve,
    Last Name: Rogers,
    Email: steve@rogers.com,
    Password: password456

### 4. Front APP

- Open a new terminal and install the node_modules via the npm install command.
- In order to launch the project on your browser, type the command npm start

### API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs


### The project uses redux and redux toolkit for authentication management
