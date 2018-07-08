/**
 * 实现这样一个函数 输出结果如下
 * f(1).value = 1;
 * f(1)(2).value = 5;
 * f(1)(2)(3).value = 14;
*/

function currying(fn){
    let _args = [];
    return function cb(){
        _args.push(arguments[0]);
        cb.value = fn.apply(null,_args);
        return cb;
    }
}
function fn(){
    let slice = Array.prototype.slice;
    let sum = 0;
    slice.call(arguments,0).forEach(element => {
        sum+=Math.pow(element,2);
    });
    return sum;

}
let f = currying(fn);
console.log(f(1)(2)(3).value);
