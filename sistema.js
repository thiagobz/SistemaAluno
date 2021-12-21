// let numeroDeAlunos = 10;

// for (let contador = 0; numeroDeAlunos >= contador; contador++) {
// console.log(contador)

//   if (contador == 0) {
//     console.log('O numero atual é zero')
//   } else if (contador % 2 == 0) {
//     console.log('O numero ' + contador + ' é par');
//   } else {
//     console.log(`O numero ${contador} é impar`);
//   }
// }


// let contador = 0
// while (contador <= numeroDeAlunos) {
//   if (contador == 0) {
//     console.log('O numero atual é zero')
//   } else if (contador % 2 == 0) {
//     console.log('O numero ' + contador + ' é par');
//   } else {
//     console.log(`O numero ${contador} é impar`);
//   }
//   contador++
// }

let listaAlunos = ["Marcel", "Franklin", "Rita", "Afrânio"]

for (let aluno of listaAlunos) {
    console.log(`Este aluno se chama ${aluno}`)
}
