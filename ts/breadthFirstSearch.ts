const bfs = (graph: number[][], start:number, end:number): number[] | null=>{
    const seen: boolean[] = new Array(graph.length).fill(false);
    const parent: number[] = new Array(graph.length).fill(-1);

    seen[start] = true;
    const queue: number[] = [start];

    do {
        const curr = queue.shift() as number;
        if(curr === end){
            break;
        }
        seen[curr] = true;
        const adjacents = graph[curr];
        for(let i = 0; i < adjacents.length; i++){
            if(adjacents[i] === 0){
                continue;
            }
            if(seen[i]){
                continue;
            }   
            seen[i] = true;
            parent[i] = curr;
            queue.push(i);
        }
        
    } while (queue.length);

    if(parent[end] === -1){
        return [];
    }

    let curr = end;
    const out: number[] = [];

    while(parent[curr] !== -1){
        out.push(curr);
        curr = parent[curr];
    }
    console.log(out)
    return [start, ...out.reverse()]

};


const adjacencyMat = [
    //0,1,2,3
    [0,3,0,0,0,12,0],//0
    [3,0,5,0,0,0,4],//1
    [0,5,0,6,0,0,3],//2
    [0,0,6,0,1,0,0],//3
    [1,0,1,0],//3
    [1,0,1,0],//3
    [1,0,1,0],//3
]

console.log(bfs(adjacencyMat,0,3))