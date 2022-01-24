let slider = document.getElementById('windy');
let windage = document.getElementById('windSpeed');
windage.innerHTML = slider.value;
slider.oninput = function() {
    windage.innerHTML = this.value;
  }
