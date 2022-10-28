const sayHi = (name) => {
    console.log(`Hello there ${name}!`);
}

//direkt erişim var kullanılan taraftaki değişkeni kullanarak
module.exports = sayHi;

//bu şekilde yapsaydık say helloyu kullarak erişebilidrik
//module.exports.sayHellooo = sayHi;