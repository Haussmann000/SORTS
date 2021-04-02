// sortメソッドをjsonオブジェクトに入れてidをkeyにして取り出す
// createSpanでidも付与する
// 

import { methods } from './sortMethods.json.js';
import { consts } from './const.json.js';

let array = [];
const maxNumber = consts[0].value;
const arrayNumber = consts[1].value;
const main = document.querySelector(".main");
const start = document.querySelectorAll(".start");
const reset = document.querySelector("#reset");
const disp = document.querySelector(".disp_area");
const title = document.querySelector(".title_area");
const titleCharacter = ["S", "O", "R", "T", "S", "!"];

const createRandom = (array) => {
    Array.from(Array(maxNumber).keys())
    for(let i = 0; i < arrayNumber; i++) {
        var rand = Math.floor(Math.random() * (maxNumber));
        array.push(rand);
    }
    return array;
}


const createSpan = (items, className = "colors") => {
    disp.innerHTML = "";
    items.forEach(e => {
        let child = document.createElement("span");
        child.innerHTML = e;
        disp.appendChild(child).setAttribute("class", className);
    })
    return disp;
}

const createButton = (methods, className) => {
    methods.forEach(e => {
        let div = document.createElement("div");
        div.innerHTML = `${e.name}!`;
        main.appendChild(div).setAttribute("id", e.name)      
        document.getElementById(e.name).setAttribute("class", className)
    });
}
    

const initTitle = () => {
    disp.innerHTML = createRandom(array);
    createSpan(titleCharacter, "colors");
}

const sortFunction = method =>{
    const start = performance.now();
    method(array);
    const end = performance.now();
    console.log(method.name);
    console.log(end - start);
    createSpan(array);
};


const setDefault = () => {
    array = [];
    array = createRandom(array);
    createSpan(array, "resetcolor");
}

const setSort = id => {
    document.querySelector(`#${id}`);
    console.log(id);
    sortFunction(getId());
}

const getId = () => {
    let id = [];
    start.forEach(e => {
        id = e.getAttribute("id");
        return id;
    });
}



window.addEventListener('DOMContentLoaded', initTitle());

createButton(methods, "start");

reset.addEventListener(
    'click',
    setDefault
    );

// console.log(methods[0].bubbleSort(array));
// console.log(methods[1].selectionSort(array));
// console.log(methods[2].quickSort(array));
// console.log(methods[3].insertionSort(array));
// console.log(methods[4].shellSort(array));
// console.log(methods[5].countingSort(array));

// main.addEventListener(
//     'click',
//     sortFunction(bubbleSort())
//     );
