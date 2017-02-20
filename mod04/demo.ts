
document.getElementById('add')
    .addEventListener('click', onClick);

function onClick(){
    var el = <HTMLInputElement>document.getElementById('x');
    var x = +el.value;

    add(x, x);
}

function add(x: number, y: number){
    console.log(x + y);
}
