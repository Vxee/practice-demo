/**
 * 编写一段代码，要求扩展console.log方法，在每个输出前增加一个自增序号
 * 如： console.log('foo') // 1:foo
 *     console.log('bar') // 2:bar
*/

console.log = (function(fn){
    var count = 1;
    return function(str){
        fn.call(console, count++ + ":" +str);
    }
})(console.log)

console.log('foo');
console.log('bar');
