function exibir(){
    var nota= window.prompt("Digite sua nota");
    calcular(nota)
}

function calcular(nota){
    if(nota >6){
        console.log("Aprovado!, Parabéns");
        alert("Aprovado!, Parabéns");
    }else if(nota ==6){
        console.log("Aprovado na média hein, tente melhorar!");
        alert("Aprovado na média hein, tente melhorar!");
    }else{
        console.log("Reprovado");
        aler("Reprovado");
    }        
        
}

