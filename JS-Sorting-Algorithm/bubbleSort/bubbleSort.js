/*
    冒泡排序
    遍历访问要排序的数列，一次比较两个元素，如果他们的位置错误，就将他们的位置交换。
    
    # 算法步骤
    1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
    2. 对每一对相邻元素做同样的比较，从开始到最后，这样每一次循环遍历最后的元素会是最大的数。
    3. 针对所有元素重复以上步骤，除了最后一个。

    # 算法复杂度分析
    
    ## 什么时候最快
    当输入的元素都是正序时 O(n)

    ## 什么时候最慢
    当输入的数据时反序的 O(n^2)

    ## 平均时间复杂度 O(n^2)
    (n-1)+(n-2)+...+1 = n*(n-2)/2 近似 n^2

    ## 空间复杂度
    O(1)

 */
function bubbleSort(arr){
    var len = arr.length;
    for(var i = 0; i < len - 1; i++){
        for(var j = 0; j < len - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
var a = bubbleSort([1,3,5,12,2,7,6,-1,-6]);
console.log(a);