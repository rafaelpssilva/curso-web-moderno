// for (let par = 0; par < 51; par += 2) { 
//     console.log(par)
// }

// for (let par = 3; par < 51; par++) {
//     if (par % 2 == 0) {
//         console.log(par)
//     }
// }

// function mostra_par(inicio, fim) {
//     fim++
//     for (; inicio < fim;  inicio++) {
//         if (inicio % 2 == 0) {
//             console.log(inicio)
//         }
//     }
// }

// mostra_par(100, 200)


// function mostrar_impar(inicio, fim) {
//     fim++ 
//     for (; inicio < fim; inicio++) {
//         if (inicio % 2 != 0) {
//             console.log(inicio)
//         }
//     }
// }

// mostrar_impar(0, 101)



// function par_impar(inicio, fim) {
//     for (; inicio < fim; inicio++) {
//         if (inicio % 2 == 0) {
//             console.log(inicio + " = Par")
//         }
//         else {
//             console.log(inicio + " = Ímpar")
//         }
//     }
// }

// par_impar(0, 100)


function mostra_par_impar(inicio, fim, mostrar_par = false, mostrar_impar = false) {
    fim++
    if (mostrar_par && mostrar_impar) {
        for (; inicio < fim; inicio++) {
            if (inicio % 2 == 0) {
                console.log(inicio + " = Par")
            }
            else if (inicio % 2 != 0) {
                console.log(inicio + " = Ímpar")
            }
        }
    }
    else if (mostrar_par) {
        for (; inicio < fim; inicio++) {
            if (inicio % 2 == 0) {
                console.log(inicio + " = Par")
            }
        }
    }
    else if (mostrar_impar) {
        for (; inicio < fim; inicio++) {
            if (inicio % 2 != 0) {
                console.log(inicio + " = Ímpar")
            }
        }
    }
    else {
        console.log("Ocorreu algum erro")
    }
}

mostra_par_impar(0, 100,)