function synOp() {
    
    let n1 = Number(prompt("Verificador de números.\n\n Insira o primeiro número:"));
    let n2 = Number(prompt("Insira o segundo número:"));
    let sum = n1 + n2;
    let men10;
    let men20;
    let compSum;
    
    if (!n1 || !n2) {
        alert("ERRO - Parâmetros inválidos!");
        synOp();
    } else {
        
        if (n1 == n2) {
            compSum = `Os números ${n1} e ${n2} são iguais. Sua soma é ${sum}, `;
        } else {
            compSum = `Os números ${n1} e ${n2} não são iguais. Sua soma é ${sum}, `;
        }
        
        if (sum < 10) {
            men10 = `que é menor que 10 `;
        } else if (sum == 10) {
            men10 = `que é igual a 10 `;
        } else {
            men10 = `que é maior que 10 `;
        }
            
        if (sum < 20) {
            men20 = `e menor que 20.`;
        } else if (sum == 20) {
            men20 = `e igual a 20`;
        } else {
            men20 = `e maior que 20.`;
        }
        
        alert(compSum + men10 + men20);
        again();
    }
    
    
    
    function again() {
        
        let choice = prompt("Deseja repetir?\n 1 - Sim\n 2- Não")
        
        if (choice == 1) {
            synOp();
        } else if (choice == 2) {
            alert("ಥ_ಥ");
        } else {
            alert("Digite uma opção válida.")
            again();
        }
    }
}

synOp();