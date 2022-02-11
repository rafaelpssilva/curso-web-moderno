function so_noticia_boa(nota) {
    if (nota >= 7) {
        console.log("Aprovado: " + nota);
    };
};

so_noticia_boa(10);
so_noticia_boa(7);
so_noticia_boa(6);


function so_verdade(valor) {
    if(valor) {
        console.log("É verdade " + valor );
    };
};

so_verdade(0);
so_verdade(1);
so_verdade("");
so_verdade(" ");
so_verdade(false);
so_verdade(true);
