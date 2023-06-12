function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var timeString = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');
  
    document.getElementById('clock').textContent = timeString;
  }
  
  // Actualizar el reloj cada segundo
  setInterval(updateClock, 1000);

  //calculadora

//aparecer y desaparecer calculadora
  function toggleCalculator() {
    var calculator = document.getElementById('calculator');
    if (calculator.style.display === 'none') {
      calculator.style.display = 'block';
    } else {
      calculator.style.display = 'none';
    }
  }

//funcionalidad
  function operate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;
  
    switch (operation) {
      case 1:
        result = num1 + num2;
        break;
      case 2:
        result = num1 - num2;
        break;
      case 3:
        result = num1 * num2;
        break;
      case 4:
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          document.getElementById('result').textContent = "No es posible dividir por cero";
          return;
        }
        break;
      default:
        document.getElementById('result').textContent = "Operación inválida";
        return;
    }
  
    document.getElementById('result').textContent = "El resultado es: " + result;
  }
  
// cambiar imagen
  function changeImage(myImage, imagen) {
    
    var cambio = document.getElementById(myImage) ;
    cambio.src = "peliculas/" + imagen;
  }
  
  function restoreImage(originalImage) {
    document.getElementById('myImage').src ="/peliculas/"+ originalImage;
  }
  
