var cliques = document.getElementsByClassName('clique')

cliques[0].addEventListener("click", function() {

    var container = document.getElementsByClassName("container")

    if (container[0].style.display === "none") {
        container[0].style.display = "block"
    } else {
        container[0].style.display = "none"
    }
})

cliques[1].addEventListener("click", function() {

    var container = document.getElementsByClassName("container")

    if (container[1].style.display === "none") {
        container[1].style.display = "block"
    } else {
        container[1].style.display = "none"
    }
})

cliques[2].addEventListener("click", function() {

    var container = document.getElementsByClassName("container")

    if (container[2].style.display === "none") {
        container[2].style.display = "block"
    } else {
        container[2].style.display = "none"
    }
})

cliques[3].addEventListener("click", function() {

    var container = document.getElementsByClassName("container")

    if (container[3].style.display === "none") {
        container[3].style.display = "block"
    } else {
        container[3].style.display = "none"
    }
})