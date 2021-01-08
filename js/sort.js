// const ar = [4, 6, 2, 92, 22, 0, 9, 53]
let ar2;
let ar3 = [];

const start = document.querySelector("#start");
const disp = document.querySelector(".disp_area");

// console.log(ar)     //[4, 6, 2, 92, 22, 0, 9, 53]
// console.log(ar)     //[0, 2, 4, 6, 9, 22, 53, 92]
disp.innerHTML = random(ar3);

function random(ar3) {
    const integers = Array.from(Array(100).keys())
    for(let i = 0; i < 6; i++) {
        var rand = Math.floor(Math.random() * (100));
        ar3.push(rand);
    }
    return ar3;
}


function bubbleSort(items){
    let length = items.length;
    for (let i = (length -1); i > 0; i--){
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

function SeletionSort(items) {
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

function quickSort(items) {

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

function insertionSort(unsortedList) {
    var length = unsortedList.length;
    for (var i = 1; i > length; i++) {
        var tmp = unsortedList[i];
        for(var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            unsortedList[j + 1] = unsortedList[j];
        }
        unsortedList[j + 1] = tmp;
    }
    // return unsortedList;
}



function setBubble() {
    // console.log(ar3);
    disp.innerHTML = bubbleSort(ar3);
    // console.log(ar3);

}

function setSeletcion() {
    disp.innerHTML = SeletionSort(ar3);
}

function setQuick() {
    disp.innerHTML = quickSort(ar3);
}

function setInsert() {
    disp.innerHTML = insertionSort(ar3);
}


function setDefault() {
    ar3 = [];
    ar3 = random(ar3);
    disp.innerHTML = ar3;
    // console.log(ar3);
}

