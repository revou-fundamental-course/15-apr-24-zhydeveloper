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

// Function to display calculation formula
function calculasiOn() {
  var result = document.getElementById('inptTextFar').value;
  if(result !== '') {
      var celValue = fahrenheitToCelsius(parseFloat(result));
      var calculationText = "Rumus untuk mengonversi suhu dari Fahrenheit ke Celsius adalah: C = (" + result + " - 32) * 5/9";
      document.getElementById('inptTextCalculation').value = calculationText;
  }
}

function calculasiOn() {
  var result = document.getElementById('inptTextCel').value;
  if(result !== '') {
      var celValue = fahrenheitToCelsius(parseFloat(result));
      var calculationText = "Rumus untuk mengonversi suhu dari Celcius ke Fahrenheit  adalah: F = (" + result + " + 32) * 9/5";
      document.getElementById('inptTextCalculation').value = calculationText;
  }
}

// Add event listeners
document.getElementById('btnKonversi').addEventListener('click', reverseCelsiusToFahrenheit);
document.getElementById('btnReset').addEventListener('click', resetInputs);
document.getElementById('btnReverse').addEventListener('click', reverseFahrenheitToCelsius);
document.getElementById('btnKonversi').addEventListener('click', calculasiOn);
