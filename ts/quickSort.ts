const sort = (arr:number[],lo:number,hi:number)=>{
    if(lo >= hi){
        return;
    }

    const pivotIndex = partition(arr,lo,hi);
    sort(arr,lo,pivotIndex-1);
    sort(arr,pivotIndex+1,hi);
};

const partition = (arr:number[], lo:number, hi:number)=>{ 
    const pivot = arr[hi];
    let indx = lo-1;
    for(let i = lo; i < hi; i++){
        if(arr[i]<=pivot){
            indx++;
            const temp = arr[indx];
            arr[indx] = arr[i];
            arr[i] = temp;
        }
    }
    indx++;
    arr[hi] = arr[indx];
    arr[indx] = pivot;
    console.log(arr)
    return indx;
};


const quickSort = (arr:number[])=>{
    const lo = 0;
    const hi = arr.length-1;
    sort(arr,lo,hi);
};

let myArr : number[] = [0,3,2,4,1];
console.log(quickSort(myArr));
console.log(myArr);