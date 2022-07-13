const now = new Date();

console.log(now);
console.log(typeof now);

console.log('Year : ' + now.getFullYear());
console.log('Month : ' + now.getMonth());

console.log(now.toLocaleString());

function Cal(){
    this.a = 1;
    this.b = 2;
    this.sum = function(){
        return this.a + this.b;
    }
}


console.log(Cal.sum())