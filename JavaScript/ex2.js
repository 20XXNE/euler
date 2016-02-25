/* find the sum of the even-valued terms of the fibbonaci sequence until 4 million*/
var fibonacci = {
        fib: [1, 2],  
        evt: 0,
        pusher: function(){
               var x = this.fib[this.fib.length - 1] + this.fib[this.fib.length - 2];
                if (x < 4000000){
                        this.fib.push(x);
                }       
                while (x < 4000000){
                        this.pusher();
                        return;
                }
 
        },
        evens: function(){
                for(i in this.fib){
                        if (this.fib[i] % 2 === 0){
                                this.evt += this.fib[i];
                        }
                }
        }
}
fibonacci.pusher();
fibonacci.evens();
console.log(fibonacci.evt);
