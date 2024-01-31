function isPalindrome(str){
    let stringSemEspaco = '';
    let palavraInversa = '';

    // Retirando os espaços
    for (let i = 0; i < str.length; i++) {
        let caractere = str[i];
        if ((caractere >= 'a' && caractere <= 'z'|| (caractere >= 'A' && caractere <= 'Z'))) {
            stringSemEspaco += caractere.toLowerCase();
        }
    }
    
    // Invertendo a plavra depois de retirar os espaços
    for (let j = stringSemEspaco.length - 1; j >= 0; j--) {
         palavraInversa += stringSemEspaco[j];
    }
    if (palavraInversa == stringSemEspaco) {
        return true;
    } 
    else {
        return false;
    }
}


function arrayMaxMin(arr){
    let maiorNumero = 0;
    let menorNumero = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maiorNumero) {
            maiorNumero = arr[i];
        }
        if (arr[i] < menorNumero) {
            menorNumero = arr[i]
        }
    }
    return [menorNumero, maiorNumero];
}