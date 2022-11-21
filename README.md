## Trybesmith Project

## About
&nbsp;&nbsp; This project is a RESTful API for a medieval items store. It was implemented with Models, Services, and Controller(MSC) architecture, using MySQL for database. Its concept was made by [Trybe](https://www.betrybe.com/).

## Files:
&nbsp;&nbsp; Project's base was developed by Trybe (Dockerfile, package.json, docker-compose.yml and other configurations). Files developed by me:
- everything on the `./src/` folder;

## Technologies:
&nbsp;&nbsp; Technologies applied by me on this project:
- Typescript;
- Express;
- MySQL;
- Docker;

## How to run the project:
- Make sure you have docker installed with versions 1.29 or higher;
- Git clone the repository;
- Run the database and the node containers with `docker-compose up -d`;
- Access the node container `docker exec -it trybesmith bash`; 
- Install all dependencies inside the container with `npm install`;
- You are ready to run the application! `npm start`; 
