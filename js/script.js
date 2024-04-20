// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Function to reset inputs
  function resetInputs() {
    document.getElementById('inptTextCel').value = '';
    document.getElementById('inptTextFar').value = '';
  }
  
  // Function to reverse the conversion from Celsius to Fahrenheit
  function reverseCelsiusToFahrenheit() {
    var celInput = document.getElementById('inptTextCel').value;
    if (celInput !== '') {
      var farValue = celsiusToFahrenheit(parseFloat(celInput));
      document.getElementById('inptTextFar').value = farValue;
    }
  }
  
  // Function to reverse the conversion from Fahrenheit to Celsius
  function reverseFahrenheitToCelsius() {
    var farInput = document.getElementById('inptTextFar').value;
    if (farInput !== '') {
      var celValue = fahrenheitToCelsius(parseFloat(farInput));
      document.getElementById('inptTextCel').value = celValue;
    }
  }
  
  // Add event listeners
  document.getElementById('btnKonversi').addEventListener('click', reverseCelsiusToFahrenheit);
  
  document.getElementById('btnReset').addEventListener('click', resetInputs);
  
  document.getElementById('btnReverse').addEventListener('click', reverseFahrenheitToCelsius);
  