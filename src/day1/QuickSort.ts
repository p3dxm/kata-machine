function qs(arr: number[], low: number, high: number): void{
    let i = low;
    let j = high;
    let pivot = arr.length;

    while(i < j){
        while(arr[i] < arr[pivot])
            i++;
        while(arr[i] > arr[pivot] )
            j--;
        if(j = i){
            let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
        i++;
        j--;
        }
    if (i < high)
        qs(arr,i,high);
    if (j > low)  
        qs(arr,low,j)
    }

    
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1)
}