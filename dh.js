function alturaArvoreUtopica(ciclos){

    var tamanho = 1;

    if(ciclos == 0){
        return tamanho;
    }else{
            
        for(var i = 1; i <= ciclos; i++){
            //console.log("ciclo: "+i)
            if(i%2 == 1 || i == 1){
                tamanho*=2;

            }else if(i%2 == 0){
                tamanho++;
            }
        }

    }


    return tamanho;
}

//console.log(alturaArvoreUtopica(0));deu
//console.log(alturaArvoreUtopica(1));deu
console.log(alturaArvoreUtopica(2));
console.log(alturaArvoreUtopica(3));
