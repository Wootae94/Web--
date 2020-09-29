// array, object
let f = function(){
    console.log(1+1);
    console.log(1+2);
}
var a = [f];
a[0]();

let o = {
    func : f
}
o.func();