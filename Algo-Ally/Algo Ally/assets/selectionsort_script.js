function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i], minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

//when the submit is pressed 
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let val = document.getElementById("input").value;
    alert("Text entered: " + val);
    document.getElementById("print1").innerHTML = "Entered Text: " + val;
});

let arr = [3, 4, 2, 3, 2, 6, 7, 8];
selectionSort(arr);
document.getElementById("print").innerHTML = "Sorted Array: " + arr;