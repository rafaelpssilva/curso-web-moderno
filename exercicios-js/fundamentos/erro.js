function tratar_erro_e_lancar(erro) {
    throw { 
        nome: erro.name,
        msg: erro.message,
        date: new Date
    };
};


function imprimir_nome_gritado(obj) {
    try { 
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratar_erro_e_lancar(e);
    } finally {
        console.log('final');
    };
} ;


imprimir_nome_gritado({name: 'Rafael'});
