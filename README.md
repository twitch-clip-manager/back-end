# Twitch Clip Manager - API

---

authors: Bill Odell, Rima Hiraoka, Joe Waine, Richard Montgomery

github repo: https://github.com/twitch-clip-manager

version: 1.0.0

Twitch Clip Manager is a video manager that searches through Twitch TV's API for relatable content and plays video clips in a continuous manner. Such functionality will allow someone to view highlight clips unimpeded, for example.

---

Table of Contents
---
[Overview](#overview)

[Installation](#installation)

[Dependencies](#dependencies)

[How to test](#how-to-test)

[How to use](#how-to-use)

[Environment variables](#environment-variables)

[Endpoints](#endpoints)

[Deployment](#deployment)

[Build](#build)

[User Stories](#user-stories)

---
### Overview
Log in to Twitch Clip Manager and use input fields to customize a Twitch tv search. The site will return up to 10 "stitched" clips for the viewer. TCM also has input fields to save favorite games and favorite channels for quick access to content.

---
### Installation
In bash, run the following commands.
Fork this repository and git clone it in your desired file system
```BASH
git clone <https or ssh for this repo>
```
Install all [Dependencies](#dependencies)
```BASH
npm i
```
---
### Dependencies
```JSON
    "cors": "^2.8.4",
    "dotenv": "^5.0.1",
    "eslint": "^4.19.0",
    "express": "^4.16.3",
    "jest": "^22.4.2",
    "superagent": "^3.8.2"
```
---
### Environment variables
Create a .env file in the root folder and define the following variables.
```
PORT=<your prefered port>
TWITCH_CLIENT_ID=<your twitch client id>
MONGODB_URI=<your prefered mongodb uri>
APP_SECRET=<your app secret *Do not use anything simple since this will be used for authretication!>
```
---
### How to test
In bash, run the following script.
```BASH
npm test
```
---
### How to use
Start a server
```BASH
npm start
```
Start a database
```BASH
npm run start-db
```
---
### Endpoints
##### Authentication
| HTTP method | ednpoint | Description |
| ----------- | -------- | ----------- |
| POST | /signup  | sign up with an username, en email address and a password |
| GET | /signin  | sign in with the username and the password |
| PUT | /logout  | logout |
##### Clip
| HTTP method | ednpoint | Description |
| ----------- | -------- | ----------- |
| GET | /clips/top | get top ten clips in twitch |
| GET | /clips/game<your prefered game> | get top ten clips that are associated with a specific game in twitch |
| GET | /clips/channel<your prefered channle> | get top ten clips that are associated with a specific channel in twitch |

