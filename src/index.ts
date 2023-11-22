import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import {LinkedList} from "./LinkedList";


/* SORTING NUMBERS */
/*const numberCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);*/

/* SORTING LETTERS */
/*
const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data)
*/
/* SORTING LINKED LIST */
    const linkedList = new LinkedList();
    linkedList.add(500);
    linkedList.add(-10);
    linkedList.add(-3);
    linkedList.add(4);
    const sorter = new Sorter(linkedList);
    sorter.sort();
    linkedList.print();
