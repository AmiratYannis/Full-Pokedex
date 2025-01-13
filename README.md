# Pokedex

This is a website to consult the pokedex which is a list of all pokemons existing. 
You can consult a pokemon stats by clicking on a card or by searching this pokemon with search bar on the top. 
You can return on the pokedex by clicking on logo in the top left of the website. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Docker


To run container for front-end and back-end by using Docker, you should first [install Docker](https://docs.docker.com/get-docker/). 

Once Docker is installed, you can run all the container at the same time by using this following command at the root of the projet: 

```
docker build -t pokedex:latest .
docker run -p 3050:3050 pokedex:latest

```



### Node jS, NPM

Pokedex is developped with React and runs with Node.js. [Install Node.js](https://nodejs.org/en/) on your environment.

Once Node.js is installed, install npm dependencies

```
npm install
```
To run this project with npm, you should run this following command: 


```
npm start
```

## Compiles and minifies for production

To build project for production, you have to use the following command: 

```
npm run build

``` 








