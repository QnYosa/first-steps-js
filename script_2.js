let nombre = prompt ("Quelle est ton nombre ? ");

function factorielle() {
    let result = 1; 

    for(let factoriel = 1 ; factoriel <= nombre ; factoriel++){
        result = factoriel * result;
      }
console.log(`le résultat est ${result}`);    
  }
  factorielle();