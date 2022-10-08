function program(num) {
    if(num<10) {
        console.log('small number');
    } else {
        console.log('big number');
    }
    console.log('either way it is a number');
}

function showPath() {
    console.log(__dirname);
}

function makeInterval() {
    //setInterval(func,milisaniye)
    setInterval(()=> {
        console.log('Hello Mello :)')
    },1000);
}

function forModules() {
    const names = require('./names');
    const sayHi = require('./utils');
    
    sayHi('susan');
    sayHi(names.john);
    sayHi(names.peter);
    
}


forModules();
