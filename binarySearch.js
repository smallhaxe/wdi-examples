var testArr = []

function genArr() {
    for (var i = 0; i < 100; i++) {
        testArr.push(Math.floor(Math.random() * 100))
    }
    console.log(testArr)
}

function yup() {
    console.log(val + ' is in the array!')
    return true
}

function sortArr(arr) {
    arr.sort(function(a, b){
        return a - b;
    })
    return arr;
}

function bs(arr, val) {
    var sorted = sortArr(arr);
    var split = Math.floor(arr.length / 2)
    
    if (val === sorted[split]) {
        return yup()
    } else if (val < sorted[split]) {
        arr = sorted.slice(0, (split))
        return bs(arr, val)
    } else {
        arr = sorted.slice(split)
        return bs(arr, val)
    }
}

genArr()
var input = prompt('Enter a value for which to search in a randomly generated array of 100 numbers the values of which are betweeen 0 and 100:')
bs(testArr, input)