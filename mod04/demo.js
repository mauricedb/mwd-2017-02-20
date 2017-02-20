
document.getElementById('add')
    .addEventListener('click', onClick);

function onClick(){
    var el = document.getElementById('x');
    var x = el.value;

    add(x, x);
}

function add(x, y){
    console.log(x + y);
}
