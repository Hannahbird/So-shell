# So-shell

## Purpose

Demonstate usage of MERN stack by creating a backend that is designed for a social media website.

## Built with

- MongoDB
- Mongoose
- Express
- DayJS

## Getting Started

- Install MongoDB Community Server - [MongoDB Community Download]('https://www.mongodb.com/try/download/community2')
- Clone this repo - `git clone https://github.com/Hannahbird/So-shell.git`
- Install the dependencies with - `npm i`

### You're Ready!

From the ../so-shell root directory - `npm start`
Use an api tool such as Insomnia to test it out

## Available APIs (CRUD operations on all)

### Users

GET /api/users - Get all Users<br>
POST /api/users - Create User<br>
GET /api/users/:userId - Get user by id<br>
PUT /api/users/:userId - Update user by id<br>
DELETE /api/users/:userId - Delete user by id<br>

### Friends

PUT /api/users/:userId/friends/:friendId - Add friend to userId<br>
DELETE /api/users/:userId/friends/:friendId - Delete friend from userId<br>

### Thoughts

GET /api/thoughts - Get all Thoughts<br>
POST /api/thoughts - Create thought and associate to User<br>
PUT /api/thoughts/:thoughtId - Update thought by id<br>
DELETE /api/thoughts/:thoughtId - Delete thought by id<br>

### Reactions

POST /api/thoughts/:thoughtId/reactions - Create reaction to thought by id<br>
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Delete reaction <br>

## Links

[View Demo](https://drive.google.com/file/d/1nhwACdwOkxP5UeSCaZ1tiYWOsd1Gxtfa/view)<br>
[Checkout the Code](https://github.com/Hannahbird/So-shell)
