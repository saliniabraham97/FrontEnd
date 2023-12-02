
function main(tempF) {
    let result;
    let celcius=(tempF - 32) * 5 / 9;
    celcius=celcius.toFixed(1);
    // let celsius = ((tempF - 32) * 5 / 9).toFixed(1); 
    result=celcius>37?"Fever":"No fever";
    return result;
  }
  