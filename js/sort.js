const ar = [4, 6, 2, 92, 22, 0, 9, 53]
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




function setBubble() {
    bubbleSort(ar3);
    ar2 = [...ar3];
    disp.innerHTML = ar2;
}

function setSeletcion() {
    SeletionSort(ar3);
    disp.innerHTML = ar3;
}

function setDefault() {
    let ar3 = [];
    disp.innerHTML = random(ar3);
}

// setHTML(bubbleSort(ar));