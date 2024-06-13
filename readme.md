
# Health Flex Twitter Backend API

This API documentation outlines the endpoints and usage of the Health Flex Twitter Backend API.

## Base URL

All endpoints are relative to the base URL: `/api`.

## Authentication

## How to run

## Install all dependencies `npm i`

- installs all the dependencies required for project to run

## To Run `npm run dev`

- starts the the server connects to mongodb 

## Env variables required
- PORT =  any integer or valid port number
- JWT_SECRET = secret to encrypty tokens
- MONGO_URI = url of mongodb


Some endpoints require authentication via a Bearer token in the `Authorization` header.

## Endpoints

### GET `/api/users/`

- Summary: Get All Users
- Description: Retrieves a list of all users.
- Response:
  - 200 OK
    - Content: Array of User objects.
      ```json
      [
        {
          "_id": "string",
          "username": "string",
          "createdAt": "string",
          "updatedAt": "string"
        }
      ]
      ```

### POST `/api/users/register`

- Summary: Register a New User
- Description: Registers a new user with the provided username and password.
- Request Body:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- Response:
  - 201 Created
    - Content: User object.
      ```json
      {
        "_id": "string",
        "username": "string",
        "createdAt": "string",
        "updatedAt": "string"
      }
      ```

### POST `/api/users/login`

- Summary: Login User
- Description: Logs in an existing user with the provided username and password, and returns an authentication token.
- Request Body:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- Response:
  - 200 OK
    - Content: Token object.
      ```json
      {
        "token": "string"
      }
      ```
  - 404 Not Found
    - Content: Error message indicating user not found.

### POST `/api/tweets/`

- Summary: Create a New Tweet
- Description: Creates a new tweet for the authenticated user.
- Request Header:
  - `Authorization: Bearer <token>`
- Request Body:
  ```json
  {
    "text": "string"
  }
  ```
- Response:
  - 200 OK
    - Content: Tweet object.
      ```json
      {
        "_id": "string",
        "text": "string",
        "createdAt": "string",
        "user": {
          "_id": "string",
          "username": "string"
        }
      }
      ```
  - 404 Not Found
    - Content: Error message indicating tweet creation failed.

### GET `/api/tweets/{userId}/timeline`

- Summary: Retrieve User Timeline
- Description: Retrieves tweets from the timeline of the specified user.
- Path Parameter:
  - `userId: string` (User ID)
- Query Parameters:
  - `cursor: string` (Optional, Pagination cursor)
  - `limit: integer` (Optional, Number of tweets to retrieve)
- Response:
  - 200 OK
    - Content: Array of Tweet objects.
      ```json
      [
        {
          "_id": "string",
          "text": "string",
          "createdAt": "string",
          "user": {
            "_id": "string",
            "username": "string"
          }
        }
      ]
      ```
  - 400 Bad Request
    - Content: Error message indicating invalid request parameters.
  - 404 Not Found
    - Content: Error message indicating timeline not found.

## Data Models

### User

- Properties:
  - `_id`: string (User ID)
  - `username`: string (Username)
  - `createdAt`: string (Date of creation)
  - `updatedAt`: string (Date of last update)

### Token

- Properties:
  - `token`: string (Authentication token)

### Tweet

- Properties:
  - `_id`: string (Tweet ID)
  - `text`: string (Tweet content)
  - `createdAt`: string (Date of creation)
  - `user`:
    - `_id`: string (User ID of tweet creator)
    - `username`: string (Username of tweet creator)

---
