// // var a = "Texto"
// // var a = 123 
// // // window.a = 123 
// // // this.a = 123
// // let b = 123
// // // window.b // undefined
// // // this.b   // undefined
// // // let b = 123 // já está declarado
// // b // = 123
// // const c = 456
// // // window.c // undefined
// // function f1() { return this === window }
// // // f1()         // true
// // // window.f1()  // true
// // // this.f1()    // true
// // const f2 = () => console.log(this === window)
// // // f2()         // true
// // // this.f2()    // dá erro
// // // window.f2()  // dá erro
// // //f2()          // true
// // // const f2 = 123  // dá erro porque já foi declarado

// // let pessoa = {nome: 'Ana', falar: function() { return `Eu sou ${this.nome}`}}
// // // pessoa.falar()   // "Eu sou Ana"
// // // this.nome        // undefined
// // // this === window  // true 
// // // pessoa           // {nome: "Ana", falar: f}
// // // f () { return this === window }      
// // // pessoa.verificarEscopo()     // false

// let a = 3

// global.b = 123
// this.c = 456
// this.d = false
// this.e = 'teste'

// console.log(a)
// console.log(global.b)
// console.log(this.c)
// console.log(module.exports.c)
// console.log(module.exports === this)
// console.log(module.exports)

// // module.exports = { e: 456, f: fasle, g: 'teste }

// // criando uma variável maluca: sem var e let
// abc = 3         // não faça isso em casa!!!
// console.log(global.abc)