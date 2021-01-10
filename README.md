# Accio BlackJack

This is intended to allow an automated game of black jack to be played and immediately see the results.

This application is powered by `React` and its base was created using (create-react-app)[https://reactjs.org/docs/create-a-new-react-app.html].

Other tools:

- We use ESLlint to make sure that our code is held to the highest quality standard
- We use Prettier to automatically format code (VSCode is the recommended Code Editor for this to work seemlessly)

## Developer Notes:

I have decided to build this using React, compiled using babel. Because of this, there will be some syntax unique to ES6, which has to be compiled before the code can run on some browsers (most ES6 features work in Chrome but not IE for example).

I have decided to use the "Game" entity to store all logic related to a game. This is not the ideal way to store state in react. A better solution would be to use redux. This would perform huge performance improvements and would allow to see game play in real time (you could see the results of each hand as they are played for example).

## Rules and Assumptions

There are two card holders: 1 dealer and 1 player

The playable cards come from a shoe. A _shoe_ is defined here as 6 decks (of standard playing cards) for a total of `52 * 6 = 312` cards. Each deck will be shuffled and stacked to make a shoe. Because of how the decks are stacked, it is possible that the same card can show up in the same hand (a user can play an Ace of Spades twice in the same hand).

The outcome of the hand can be one of the following: A tie, Player(s) win, Dealer wins

## Instructions

To run this program, first you must have a recent version of node installed (node version 8+). Then, you shuold `cd` into this directory and run `npm install`.

Once node and dependencies are installed, you have access to these commands:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
