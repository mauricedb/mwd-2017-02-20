function demo() {
    
    'use strict'

    var o = {};

    o['name'] = 'Maurice';
    o.location = 'London';


    console.log('o = ', o);
}

demo();

f1();
// f2();

function f1(){
console.log('f1')
}

var f2 = function f2(){
console.log('f2')
}

f1();
f2();


console.log(f1)
console.log(f2)



console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);


var o2 ={

    x : 0.1,
    y : 0.2,
    z: 0.1 + 0.2
};


console.log(JSON.stringify(o2))


var data = [o2, 'Maurice', new Date()];

data[10] = 11
console.log(data)



function add(x, y, z){
    'use strict'
    console.log(arguments.length)
    return x + y + z;
}

console.log(add.length)
console.log(add(1,2, '3'))


console.log(parseFloat('5.5'))


if (!!o2){

    console.log('There is an o2')
}


console.log(new Date(1))




function getPerson() {
    return {
        name: 'Maurice'
    };
}

[].forEach(function(){});
[].forEach(function(){});

console.log('getPerson()', getPerson())



function createClosure(){
    var name = 'Maurice1'

    setInterval(function(){
        name = new Date();
    }, 1000);

    return function(){
        console.log(name)
    }
}


var fn = createClosure();
fn();


function Person(name){
    'use strict'
    if (this === undefined) throw new Error('Please use new')

    this.myName = name;


    // this.sleep = function(){

    // }

}

Person.prototype.sleep = function(){
    console.log(this.myName, 'is sleeping')

}

var me = new Person('Maurice');
console.log(me);
me.sleep();


var sleep = me.sleep.bind({myName : 'Whatever'});
// me.sleep = sleep; 

// delete Person.prototype.sleep;

me.sleep();
