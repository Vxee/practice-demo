/*
    # 选择排序
    选择排序无论什么数据都是O(n^2)的时间复杂度。因此使用时，数据规模越小越好。唯一的好处是不占用额外的内存空间

    ## 算法步骤
    1. 首先在未排序序列中找到最小（大），然后存放在排序序列的起始位置
    2. 然后在剩余未排序的序列中找到最小（大），然后存放在已排序序列的末尾。
    3. 重复第二步，知道所有元素均排序完毕。

    ## 复杂度分析
    ### 平均时间复杂度
    O(n^2)
    ### 最好情况
    O(n^2)
    ### 最坏情况
    O(n^2)
    ### 空间复杂度
    O(1)
*/

function selectionSort(arr){
    var len = arr.length;
    for(var i = 0; i < len - 1; i++){
        var minIndex = i, temp;
        for(var j = i + 1; j < len;j ++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
