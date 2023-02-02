const validateCred = (arr) => {
    let nDig = arr.length;
    let adder = 0;
    for (let i = nDig - 2; i >= 0; i -= 2) {
      let dig = arr[i];
      dig *= 2;
      if (dig > 9) {
        dig -= 9;
      }
      adder += dig;
    }
  
    for (let i = nDig - 1; i >= 0; i -= 2) {
      let dig = arr[i];
      adder += dig;
    }
  
    if ((adder % 10) > 0) {
      return false;
    } else if ((adder % 10) === 0) {
      return true;
    }
  }
  
  
  
  const invalList = [];
  const invalListType = [];
  const findInvalidCards = (arr) => {
    arr.filter((tiny) => {
      if (validateCred(tiny)) {
        invalList.push(tiny);
      } 
    });
    return invalList;
  }
  
  
  const idInvalidCardCompanies = (arr) => {
    arr.forEach((tiny) => {
      let cardMfg = '';
      if (tiny[0] === 3) {
        if (invalListType.indexOf('amex') === -1){
        invalListType.push('amex') 
        }
      } else if (tiny[0] === 4) {
        if (invalListType.indexOf('visa') === -1) {
        invalListType.push('visa');
        }
      } else if (tiny[0] === 5) {
        if (invalListType.indexOf('mastercard') === -1) {
        invalListType.push('mastercard');
        }
      } else if (tiny[0] === 6) {
        if (invalListType.indexOf('discover') === -1){
          invalListType.push('discover')
          }
      }
    });
    return invalListType;
  }


let checkerButton = document.getElementById("card-checker-button");


let input = document.getElementById("card-input");


checkerButton.onclick = validateCred(input);