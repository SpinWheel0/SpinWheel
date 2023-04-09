window.onload = function() { // onload is called when the page is fully loaded
    let wheel = document.querySelector(".wheel"); // select the wheel element
    let spinBtn = document.querySelector(".spinBtn"); // select the spin button element
    let value = Math.ceil(Math.random() * 3600); // generate a random value between 0 and 3600
    spinBtn.onclick = function() { // when the spin button is clicked
      wheel.style.transform = "rotate(" + value + "deg)"; // rotate the wheel
      value += Math.ceil(Math.random() * 3600); // generate a random value between 0 and 3600
      console.log(value); // log the value to the console
    }; // end spinBtn.onclick
    value.toString(); // convert the value to a string
    value.parseInt(); // convert the value to an integer
    alert('Hi!'); // alert the user
  }; // end window.onload
