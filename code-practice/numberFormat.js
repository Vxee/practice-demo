/**
 * 编写formatNum函数，将数字格式化为金额格式，每三位数加入逗号：
 * var money = 34782632
 * 添加方法 money.formatNum() 输出 "34,782,632"
 * 
*/

function formatNum(){
    var str = String(this);
    var arr = str.split('').reverse();
    var temp = 1;
    for(var i = 0; i < arr.length-1; i++){
        if(temp % 3 == 0){
            arr.splice(i+1,0,',');
            i++;
            temp = 1;
        }else{
            temp++;
        }
    }
    return arr.reverse().join('');
}
Number.prototype.formatNum = formatNum;
var num = 1234567812345678;
console.log(num.formatNum());


