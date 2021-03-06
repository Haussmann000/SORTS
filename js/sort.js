let array = [];
const arrayNumber = 7;
const maxNumber = 100;
const start = document.querySelector("#start");
const disp = document.querySelector(".disp_area");
const title = document.querySelector(".title_area");
const titleCharacter = ["S", "O", "R", "T", "S", "!"];

const createRandom = (array) => {
    const integers = Array.from(Array(maxNumber).keys())
    for(let i = 0; i < arrayNumber; i++) {
        var rand = Math.floor(Math.random() * (maxNumber));
        array.push(rand);
    }
    return array;
}


const createSpan = (items, className = "colors") => {
    disp.innerHTML = "";
    items.forEach(e => {
        let child = document.createElement("span")
        child.innerHTML = e;
        disp.appendChild(child).setAttribute("class", className);
    })
    return disp;
}

const initTitle = () => {
    disp.innerHTML = createRandom(array);
    createSpan(titleCharacter, "colors");
}

const sortFunction = method =>{
    const start = performance.now();
    method(array);
    const end = performance.now();
    console.log(end - start);
    createSpan(array);
};


const setDefault = () => {
    array = [];
    array = createRandom(array);
    createSpan(array, "resetcolor");
}


//// ソート

// Bubble Sort
function bubbleSort(items){
    let length = items.length;
    for (let i = (length - 1); i > 0; i--){
        for (let j = (length - i); j > 0; j--){
            if(items[j] < items[j - 1]){
                let tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
    return items;
}


// Selection Sort
const selectionSort = (items) => {
    var length = items.length;
    for (var i = 0; i < length - 1; i++) {
        var min  = i;
        for (var j = i + 1; j < length; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }
        if (min != i) {
            var tmp = items[i];
            items[i] = items[min];
            items[min] = tmp;
        }
    }
    return items;
}

// Quick Sort
const quickSort = (items) => {

    var length = items.length;

    if (length <= 1) {
        return items;
    }
    var PIVOT = items[0];
    var GREATER = [];
    var LESSER = [];

    for (var i = 1; i < length; i++) {
        if (items[i] > PIVOT) {
        GREATER.push(items[i]);
        } else {
        LESSER.push(items[i]);
        }
    }

    var sorted = quickSort(LESSER);
    sorted.push(PIVOT);
    sorted = sorted.concat(quickSort(GREATER));

    return sorted;
}

// Insertion Sort
function insertionSort(unsortedList) {
    var len = unsortedList.length;
    for (var i = 1; i < len; i++) {
        var tmp = unsortedList[i];
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            unsortedList[j + 1] = unsortedList[j];
        }
        unsortedList[j + 1] = tmp;
    }
}

// Shell Sort
const shellSort = (items) => {
    var interval = 1;
    while (interval < items.length / 3){
        interval = interval * 3 + 1;
    }

    while(interval > 0) {
        for (var outer = interval; outer < items.length; outer++) {
            var value  = items[outer];
            var inner = outer;
            while(inner > interval - 1 && items[inner - interval] >= value) {
                items[inner] = items[inner - interval];
                inner = inner - interval;
            }
            items[inner] = value;
        }
        interval = (interval -1) / 3;
    }
    return items;
};

// Counting Sort
const countingSort = (arr, min = 1, max = maxNumber) => {
    let i;
    let z = 0;
    const count = [];
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
    console.log(count[i]);
    for (i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    console.log(count[i]);
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
}


window.addEventListener('DOMContentLoaded', initTitle());