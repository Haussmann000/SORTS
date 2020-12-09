let ar = [4, 6, 2, 92, 22, 0, 9, 53]

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
}


console.log(ar)     //[4, 6, 2, 92, 22, 0, 9, 53]
bubbleSort(ar);
console.log(ar)     //[0, 2, 4, 6, 9, 22, 53, 92]

const start = document.querySelector("#start");
const disp = document.querySelector(".disp_area");

function setHTML() {
    start.setAttribute()
}