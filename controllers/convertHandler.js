/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    let numbersOnlyRegex = /\d*?\.?\d+\/?(\d*?\.?\d*)?/;
    let fractionRegex = /\d*?\.?\d+\/\d*?\.?\d*/;
    let doubleFractionRegex = /\d*?\.?\d*\/\d*?\.?\d*\/\d*?\.?\d*/;
    
    // Transform input to lower case:
    var result = input.toLowerCase();
    
    // Remove the unit:
    // For double fraction:
    if(result.match(doubleFractionRegex))
      result = result.match(doubleFractionRegex);
    // For fraction:
    else if(result.match(fractionRegex))
      result = result.match(fractionRegex);
    // For decimal number:
    else
      result = result.match(numbersOnlyRegex);
    
    // Check if the test was successful:
    if(result)
      result = result[0];
    
    // Check for fractions:
    if(!doubleFractionRegex.test(result) && fractionRegex.test(result)) {
      let slashIndex = input.indexOf('/');
      let numerator = input.slice(0, slashIndex);
      let denominator = input.slice(slashIndex + 1, input.length);
      result = parseFloat(numerator) / parseFloat(denominator);
      result = parseFloat(result.toFixed(5));
    // Check for empty number:
    } else if(!result) {
      result = 1;
    // Make sure it is a valid number:
    } else if(!isNaN(result)) {
      result = parseFloat(result);
    } else {
      result = 'invalid number'; 
    }
      
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    if(/gal$/.test(input.toLowerCase()))
      result = 'gal';
    else if(/lbs$/.test(input.toLowerCase()))
      result = 'lbs';
    else if(/mi$/.test(input.toLowerCase()))
      result = 'mi';
    else if(/l$/.test(input.toLowerCase()))
      result = 'l';
    else if(/kg$/.test(input.toLowerCase()))
      result = 'kg';
    else if(/km$/.test(input.toLowerCase()))
      result = 'km';
    else
      result = 'invalid unit';
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    if(initUnit === 'gal')
      result = 'l';
    else if(initUnit === 'lbs')
      result = 'kg';
    else if(initUnit === 'mi')
      result = 'km';
    else if(initUnit === 'l')
      result = 'gal';
    else if(initUnit === 'kg')
      result = 'lbs';
    else if(initUnit === 'km')
      result = 'mi';
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    if(unit === 'gal')
      result = 'gallons';
    else if(unit === 'lbs')
      result = 'pounds';
    else if(unit === 'mi')
      result = 'miles';
    else if(unit === 'l')
      result = 'liters';
    else if(unit === 'kg')
      result = 'kilograms';
    else if(unit === 'km')
      result = 'kilometers';
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    if(initUnit === 'gal')
      result = initNum * galToL;
    else if(initUnit === 'lbs')
      result = initNum * lbsToKg;
    else if(initUnit === 'mi')
      result = initNum * miToKm;
    else if(initUnit === 'l')
      result = initNum / galToL;
    else if(initUnit === 'kg')
      result = initNum / lbsToKg;
    else if(initUnit === 'km')
      result = initNum / miToKm;
    
    if(result)
      result = parseFloat(result.toFixed(5));
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + returnUnit;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
