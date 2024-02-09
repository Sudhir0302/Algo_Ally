function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) 
    {
        for(let j = 0; j < arr.length-1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    alert(arr);
}

let arr = [5, 3, 2, 5, 3, 4, 6];    
bubbleSort(arr);