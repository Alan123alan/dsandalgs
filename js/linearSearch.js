const search = (list, searchValue)=>{
    for(let i=0; i<list.length; i++){
        if(list[i]==searchValue){
            return true
        }
    }
    return false
};

console.log(search([1,2,3,4,5,6],5));
