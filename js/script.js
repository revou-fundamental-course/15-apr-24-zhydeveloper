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
  document.getElementById('inptTextCalculation').value = '';
}
// popup
function showPopup(message) {
  var popup = document.createElement('div');
  popup.className = 'popup-overlay';
  
  var popupContent = document.createElement('div');
  popupContent.className = 'popup-content';
  
  var popupMessage = document.createElement('p');
  popupMessage.textContent = message;
  
  var popupButton = document.createElement('button');
  popupButton.className = 'popup-btn';
  popupButton.textContent = 'Close';
  popupButton.onclick = hidePopup;
  
  popupContent.appendChild(popupMessage);
  popupContent.appendChild(popupButton);
  popup.appendChild(popupContent);
  
  document.body.appendChild(popup);
}

function hidePopup() {
  var popup = document.querySelector('.popup-overlay');
  if (popup) {
    popup.parentNode.removeChild(popup);
  }
}


// Function to reverse the conversion from Celsius to Fahrenheit
function reverseCelsiusToFahrenheit() {
    var celInput = document.getElementById('inptTextCel').value;
    if (celInput.trim() === '') {
        showPopup('Mohon isi input dengan nilai suhu dalam Celcius!');
        return;
    }
    
    var farValue = celsiusToFahrenheit(parseFloat(celInput));
    document.getElementById('inptTextFar').value = farValue;
}

function reverseFahrenheitToCelsius() {
    var farInput = document.getElementById('inptTextFar').value;
    if (farInput.trim() === '') {
        showPopup('Mohon isi input dengan nilai suhu dalam Fahrenheit!');
        return;
    }
    
    var celValue = fahrenheitToCelsius(parseFloat(farInput));
    document.getElementById('inptTextCel').value = celValue;
}

// Function to display calculation formula
function calculasiOnCel() {
  var resultCel = document.getElementById('inptTextCel').value;
  if(resultCel !== '') {
      var farValue = celsiusToFahrenheit(parseFloat(resultCel));
      var calculationText = "Rumus untuk mengonversi suhu dari Celsius ke Fahrenheit adalah: F = (" + resultCel + " * 9/5) + 32 ";
      document.getElementById('inptTextCalculation').value = calculationText;
  }
}

function calculasiOnFar() {
  var resultFar = document.getElementById('inptTextFar').value;
  if(resultFar !== '') {
      var celValue = fahrenheitToCelsius(parseFloat(resultFar));
      var calculationText = "Rumus untuk mengonversi suhu dari Fahrenheit ke Celcius adalah: C = ("+ resultFar + " - 32) * 5/9 " ;
      document.getElementById('inptTextCalculation').value = calculationText;
  }
}

// Add event listeners
document.getElementById('btnKonversi').addEventListener('click', reverseCelsiusToFahrenheit);
document.getElementById('btnReset').addEventListener('click', resetInputs);
document.getElementById('btnReverse').addEventListener('click', reverseFahrenheitToCelsius);
document.getElementById('btnKonversi').addEventListener('click', calculasiOnCel);
document.getElementById('btnReverse').addEventListener('click', calculasiOnFar);
