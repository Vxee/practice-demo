/**
 *  # 插入排序
 * 
 *  插入排序的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 *  插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。
 * 
 *  ## 算法步骤
 *  1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
 *  2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 * 
 *  ## 平均时间复杂度
 *  O(n^2)
 *  ## 最好情况
 *  O(n) 整个数组都是已排好序
 *  ## 最坏情况
 *  O(n^2)
 *  空间复杂度
 *  O(1)
 */

function insertionSort(arr){
    var len = arr.length;
    var preIndex, current;
    for(var i = 1; i < len; i++){
        preIndex = i -1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex]; 
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
