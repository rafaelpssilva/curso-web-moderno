let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // return implícito
console.log(dobro(Math.PI))

let ela = function() {
    return "Olá"
}

ela = () => {
    return  "Olá"
}

ela = () => "Olá"
ela = _ => "Olá" // possui um param 
console.log(ela())
