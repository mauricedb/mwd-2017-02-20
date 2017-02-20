class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name, "is eating");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  sleep() {
    console.log(this.name, "is sleeping");
  }
}

var zorro = new Cat("Zorro");
zorro.sleep();
zorro.eat();

// this
// fetch('/api/cats')
//     .then((rep, data) => {
//      if (data){

//      }
//         return res.json()
//     })
// .then(function(res){
//     return res.json()
// })

function doStuff(x = 1) {
  // console.log(y)
  if (x === 1) {
    const y = 2;

    // y = 3;
    console.log(y);
  }

  // console.log(y)
}

doStuff();

function print({ name, age }) {
  if (!name) throw new Error("I need a name");

  console.log("The cat " + name + " \nis sleeping");
  console.log(`The cat ${name} is sleeping`);
}

print(zorro);

var o = {
  x: {
    y: 1
  }
};

test(o);
function test({ x: { y } }) {
  console.log(y);
}

var {name} = zorro;


const names = {
    fn: '1234'
}

var allNumbers = {
    [Symbol.iterator]() {
        let current = 1;
        return {
            next() {
                current++;
                // console.log(current)
                return {done:false, value: current};
            }
        }
    },
    [names.fn](){

    }
};


for (let x of allNumbers){
    if (x > 10) break;
    console.log(x)
}



// function getData(){
//     fetch('index.html')
//             .then(rsp => rsp.text())
//             .then(data => console.log(data))

// }

async function getData(){
    const rsp1 =  fetch('index.html')
    const rsp2 = fetch('index.html')
    const data1 = await (await rsp1).text()
    const data2 = await (await rsp2).text()
    console.log(data1);

}

    console.log('Getting data')

getData()
    console.log('Done getting data')
