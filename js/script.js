// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
  }
  
  // Function to reset inputs
  function resetInputs() {
    document.getElementById('inptTextCel').value = '';
    document.getElementById('inptTextFar').value = '';
  }
  
  // Function to reverse the conversion
  function reverseConversion() {
    var celInput = document.getElementById('inptTextCel').value;
    var farInput = document.getElementById('inptTextFar').value;
    
    if (celInput !== '') {
      var farValue = celsiusToFahrenheit(parseFloat(celInput));
      document.getElementById('inptTextFar').value = farValue;
    } else if (farInput !== '') {
      var celValue = (parseFloat(farInput) - 32) * 5/9;
      document.getElementById('inptTextCel').value = celValue;
    }
  }
  
  // Add event listeners
  document.getElementById('btnKonversi').addEventListener('click', function() {
    var celInput = document.getElementById('inptTextCel').value;
    if (celInput !== '') {
      var farValue = celsiusToFahrenheit(parseFloat(celInput));
      document.getElementById('inptTextFar').value = farValue;
    }
  });
  
  document.getElementById('btnReset').addEventListener('click', resetInputs);
  
  document.getElementById('btnReverse').addEventListener('click', reverseConversion);
  