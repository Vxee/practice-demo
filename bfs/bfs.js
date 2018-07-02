/*
    求a点是否能到达b点
    现用一个二维数组存储各个点之间的连通性，0表示不连接，n行m列的1表示n通向点m
 */
var map = [ 
    [0,1,1,0,0],
    [0,0,1,1,0],
    [0,1,1,1,0],
    [1,0,0,0,0],
    [0,0,1,1,0]
    ];

function bfs(arr,start,end){
    var row = arr.length;
    var queue = [];
    var i = start;
    var visited = []; // 记录节点是否访问
    var order = []; //记录顺序
    queue.push(i); // 将根节点加入
    while(queue.length){ //如果队列没有被清空，代表还没有遍历完
        for(var j = 0;j < row; j++){
            if(arr[i][j]){ // 如果是1
                if(!visited[j]){
                    queue.push(j); // 队列加入未访问
                }
            }
        }
        var to = queue.shift(); // 取出队列第一个
        if(to == end) return true;
        visited[i] = true;
        // while(visited[queue[0]]){
        //     queue.shift();
        // }
        order.push(i); // 记录顺序
        i = queue[0];
    }
    return false;
}
if(bfs(map,0,1)){
    console.log('arrived')
}else{
    console.log('can not arrived')
}