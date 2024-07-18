# Fakeasy

## [See the App!](https://fakeasy.netlify.app)

![App Logo](/src/assets/fakeasy-logo.png)

## Description

Fakeasy is a fictional data generation application that allows users to generate and export data in JSON format.

#### [Client Repo here](https://github.com/lamardemuela/fakeasy-client)
#### [Server Repo here](https://github.com/lamardemuela/fakeasy-server)

## Technologies & Libraries used

**Frontend**
- HTML
- CSS
- Javascript
- React JS 
- React Router Dom
- React Context
- Axios

**Backend** 
- Javascript
. Node JS 
- Express JS 
- MongoDB
- Mongoose
- JWT auth. 

**Libraries**
- MUI: Material UI

# Client Structure

## User Stories

- **404** - As a user, I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **Login** - As a user, I want to log in to the app so that I can access my personalized features as download JSON files.
- **Signup** - As a new user, I want to create an account so that I can start using the app and download JSON files.
- **Generate Data** - As user, I want to select a category and the number of data items to generate so that I can create specific datasets.
- **Export to JSON** - As a logged-in user, I want to export the generated data to a JSON file so that I can use it for my own purposes.
- **Logout** - As a logged-in user, I want to log out of the app so that my session is secured.
- **Home** - As a user, I want to see the home page where the app's features and roles are explained.

## Client Routes

## React Router Routes (React App)

- **Home** 
  - **Path:** `/`
  - **Component:** `Home`
  - **Description:** The landing page where the app's features and roles are explained.

- **Generate Data** 
  - **Path:** `/generate-data`
  - **Component:** `DataGenerator`
  - **Description:** Page where users can generate data based on selected categories.

- **Login** 
  - **Path:** `/login`
  - **Component:** `Login`
  - **Description:** Login page for users to access their accounts.

- **Signup** 
  - **Path:** `/signup`
  - **Component:** `Signup`
  - **Description:** Signup page for new users to create an account.

- **Not Found**
  - **Path:** `*`
  - **Component:** `NotFound`
  - **Description:** A 404 page that appears when users navigate to a non-existent route.

- **Error**
  - **Path:** `/error`
  - **Component:** `Error`
  - **Description:** Error page that displays when there is a server or client-side error.


## Other Components

- Navbar
- Footer

## Services

- Auth Service
    - Base URL: https://your-backend-api.com/api/auth
  
- External API
  - https://fakerapi.it/api/v1/
  
## Context

- auth.context
- theme.context
  
## Links

### Project

[Repository Link Client](https://github.com/lamardemuela/fakeasy-client)

[Repository Link Server](https://github.com/lamardemuela/fakeasy-server)

[Deploy Link](https://fakeasy.netlify.app)

[Linkedin](https://www.linkedin.com/in/agueda-muela/)
