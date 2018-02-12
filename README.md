# PokemonJS
#### January, 2018. Epicodus Javascript Team Week.

An Angular JS Pokemon battle game.

### Gameplay

![screen shot of start screen](https://raw.githubusercontent.com/nathan-barrett/PokemonJS/master/src/assets/starter.png)

![screen shot of map screen](https://raw.githubusercontent.com/nathan-barrett/PokemonJS/master/src/assets/map1.png)

![screen shot of battle screen](https://raw.githubusercontent.com/nathan-barrett/PokemonJS/master/src/assets/battle.png)

### Authors

* Nathan Barrett -- [GitHub](https://github.com/nathan-barrett)
* Lew Davidson -- [GitHub](https://github.com/lewdavidson)
* Luke Bertram -- [GitHub](https://github.com/lukebertram)
* Amy Churchwell -- [GitHub](https://github.com/amychurchwell)

## Setup Instructions

Clone from GitHub
```
$ git clone https://github.com/nathan-barrett/PokemonJS.git
```

From project directory. Install NPM packages.
```
$ npm install
```

Launch local server.
```
$ ng serve --o
```

Install [Allow-Control-Allow-Origin Chrome Plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

## Built with

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

* Utilizes the RESTful API, [PokeAPI](https://pokeapi.co/)

### Random Encounter Logic

From (Wikipedia)[]:
> 1. Set X to a random integer between 64 and 255.
> 2. For each step in plains, decrement X by 4. For each step in forest, swamp, or desert, decrement X by 8.
> 3. When X < 0, a fight ensues. Go to step 1.

This logic will require counting the number of squares the player character moves and decrementing a variable in the game object with each one.
