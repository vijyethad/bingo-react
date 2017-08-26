import React from 'react';
import ReactDOM from 'react-dom';
import {BingoApp} from './BingoApp';
import styles from './app.css';

var numbers = [];
for (var i = 1; i <= 100; i++) {
   numbers.push(i);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var randomNumbers = shuffle(numbers);

ReactDOM.render(
  <BingoApp boardNumbers={randomNumbers} />,
  document.getElementById('root')
);
