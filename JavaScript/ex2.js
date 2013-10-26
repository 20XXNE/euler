/* This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
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
