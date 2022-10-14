document.getElementById("submitButton").onclick = function(){
  reset();
  let resultNumber;
  let a = document.getElementById("inputA").value;
  let b = document.getElementById("inputB").value;

  if (a >= 1000000 || b >= 1000000){
    error.textContent += "Chyba: číslo je moc velké";
  }
  
  else {
    for(let i = 1; i <= a && i <= b; i++){
      if(a % i == 0 && b % i == 0){
        resultNumber = i;
      }
    }
  
    if (resultNumber === undefined){
      error.textContent += "Chyba: není číslo";
    }
  
    else {
      result.textContent += resultNumber;
    }
  }
}

let result = document.getElementById("result");
let oldResult = result.textContent;

let error = document.getElementById("errorDiv");
let oldError = error.textContent;

function reset(){
  result.textContent = oldResult;
  error.textContent = oldError;
}