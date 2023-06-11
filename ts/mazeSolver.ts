type Point = {
    row: number,
    col: number
}

const directions = [
    [-1, 0],//up
    [1, 0],//down
    [0, -1],//left
    [0, 1]//right
]

const walk = (maze:string[], wall:string, curr:Point, end:Point, seen:boolean[][], path:Point[]): boolean=>{
    if(curr.row < 0 || curr.row >= maze.length || 
       curr.col < 0 || curr.col >= maze[0].length){
        // console.log("index out of limits");
        return false;
    }
    if(maze[curr.row][curr.col]===wall){
        // console.log("bumped into a wall");
        return false;
    }
    if(curr.row === end.row && curr.col === end.col){
        // console.log("exit found");
        path.push(end);
        return true;
    }
    if(seen[curr.row][curr.col]){
        // console.log("already visited");
        return false;
    }

    //pre
    //we add the current visited point to the path in case during the recursion the solution is found
    seen[curr.row][curr.col] = true;
    path.push(curr);
    for(let i = 0; i < directions.length; i++){
        const[row,col] = directions[i];
        const newCurr = {row:curr.row+row, col:curr.col+col};
        const condition = walk(maze, wall, newCurr, end, seen, path);
        if(condition){
            return true;
        }
    }
    //post
    //if we exit the recursion it means that the point added in the recursion is not part of the solution so pop it
    path.pop();
    

    //NO SOlUTION
    return false
};

const solveMaze = (maze:string[], wall:string, start:Point, end:Point): Point[]=>{
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for(let i = 0; i < maze.length; i++){
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
};

const maze = ["#####E##",
              "##    ##",
              "##S#####"];
console.log(maze);
console.log(maze[0][7]);
console.log(maze[2][2]);
const start = {row: 2, col:2}
const end = {row: 0, col:5}
const path = solveMaze(maze, "#", start, end)
console.log(path);