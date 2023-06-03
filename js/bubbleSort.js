const bubbleSort = (list)=>{
    for(let j=0; j<list.length; j++){
        for(let i=0; i<list.length-1; i++){
            if(list[i]>list[i+1]){
                const temp = list[i+1];
                list[i+1] = list[i];
                list[i] = temp;
            }
        }
    }
       return list
};

const unsortedArr = [1,2,5,4,6,7,3];
console.log(bubbleSort(unsortedArr));
