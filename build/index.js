"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
/* SORTING NUMBERS */
/*const numberCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);*/
/* SORTING LETTERS */
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
