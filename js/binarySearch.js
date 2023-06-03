const recursiveBinarySearch = (list, lo, hi, searchValue)=>{
    if(lo==hi){
        return false
    }
    console.log("boundaries", lo, hi);
    let m = lo + Math.floor((hi-lo)/2);
    console.log("index of mid value", m);
    console.log("mid value", list[m], "search value", searchValue);
    if(list[m]==searchValue){
        return true
    }else if(list[m]<searchValue){
        return binarySearch(list, m, hi, searchValue);
    }else if(list[m]>searchValue){
        return binarySearch(list, lo, m, searchValue);
    }
};

const iterativeBinarySearch = (list, searchValue)=>{
    let lo = 0;
    let hi = list.length;
    do{
        let m = lo + Math.floor((hi-lo)/2);
        if(searchValue === list[m]){
            return true
        }else if(searchValue < list[m]){
            hi = m;
        }else{
            lo = m+1;
        }

    }while(lo < hi)
    return false
};

const myList = [1,3,4,5,6,7,8,9,10,11,12,13,14];
console.log(iterativeBinarySearch(myList, 2));

