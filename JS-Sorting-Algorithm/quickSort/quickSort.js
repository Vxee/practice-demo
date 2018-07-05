/**
 * # 快速排序
 * 快速排序使用分治法策略把一个串行分为两个子串行。
 * 
 * ## 算法步骤
 * 1. 从数列中挑出一个基准。
 * 2. 重新排序数列，所有元素比基准小的摆在基准前，所有元素比基准值大的摆在基准后（相同的数可以在任意一边）。在这个分区退出后，
 * 该基准就处于数列的中间位置，这个成为分区操作。
 * 3. 递归地把小于基准值元素的子数列和大于基准值元素的子数列排序。
 * 
 * 
 * 
 * 
 */

 function quickSort(arr, left, right){
     var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len -1 : right;

    if(left < right){
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
 }
 function partition(arr, left, right){  // 分区操作
    var pivot = left,                   // 设定基准值 （pivot）
        index = pivot+1;
    for(var i = index; i <= right; i++){
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;console.log(arr);
        }
    }console.log(arr);
    swap(arr, pivot, index-1);console.log(index);
    return index;
 }
 function swap(arr, i, j){
     var temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
 }
 var a1 = [];
for(var i =0;i< 10 ;i++){
    a1.push(Math.round(Math.random()*100));
}
 var a = quickSort([15,17,0,4]);
 console.log(a);

































































function quickSort(arr, left, right){
    var len = arr.length,
       partitionIndex,
       left = typeof left != 'number' ? 0 : left,
       right = typeof right != 'number' ? len -1 : right;

   if(left < right){
       partitionIndex = partition(arr, left, right);
       quickSort(arr, left, partitionIndex-1);
       quickSort(arr, partitionIndex+1, right);
   }
   return arr;
}
function partition(arr, left, right){  // 分区操作
   var pivot = left,                   // 设定基准值 （pivot）
       index = pivot+1;
   for(var i = index; i <= right; i++){
       if (arr[i] < arr[pivot]) {
           swap(arr, i, index);
           index++;console.log(arr);
       }
   }console.log(arr);
   swap(arr, pivot, index-1);console.log(index);
   return index;
}
function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}