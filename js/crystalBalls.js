//Two crystal ball problem: you are given two crystal balls and are tasked with
//figuring out how far up a building do you need to throw them so theyĺl break
//figure out the lowest floor from where throwing the crytal balls will break
//them do this in the most efficient way

//up to this point I have implemented only linear search and binary search, but
//for this problem both algorithms have a time complexity of O(n).
//in this case binary search will also end up having a time complexity of O(n)
//due to the two try restriction brought by the two crystal balls (after each
//jump to the middle the ball could break, worst case scenario you will break
//the balls after two jumps)


//a solution presented in the course is to traverse the array (the building) at
//square root of n, so in worst case scenario time complexity O(2sqrt(N)) and
//since constants are disregarded time complexity becomes O(sqrt(N))


const search = (list)=>{
    const jumpAmount = Math.floor(Math.sqrt(list.length));
    let i = jumpAmount;
    for(; i<list.length; i+=jumpAmount){
        if(list[i]){
            break;
        }
    }
    i -= jumpAmount;
    for(let j=i; j<list.length; j++){
        if(list[j]){
            return j
        }
    }
    return -1
};


const building = [false, false, false, false, true, true, true, true];
console.log(building);
console.log(search(building));
