var options = [
  "Bite Release",
  "Front Choke Release",
  "Stripping a Grab",
  "Wrist Release",
  "Shoulder Check",
  "Protective Shuffle",
  "Safety Stance",
  "Elbow Check",
  "1 Person Stability Hold",
  "2 Person Stability Hold",
];

var spinBtn = document.getElementById("spin-btn");
spinBtn.addEventListener("click", spinWheel);

function spinWheel() {
  // Get a random option from the array
  var randomIndex = Math.floor(Math.random() * options.length);
  var selectedOption = options[randomIndex];
  
  // Show the notification and play the video
  showNotification(selectedOption);
  
  // Apply the spinning class to the wheel for a few seconds
  var wheel = document.querySelector(".wheel");
  wheel.classList.add("spinning");
  setTimeout(function() {
    wheel.classList.remove("spinning");
  }, 5000);
}

function showNotification(selectedOption) {
  alert("The wheel landed on " + selectedOption);
  
  switch(selectedOption) {
    case "Option 1":
      // Code to play video for Option 1
      break;
      
    case "Option 2":
      // Code to play video for Option 2
      break;
      
    case "Option 3":
      // Code to play video for Option 3
      break;
      
    case "Option 4":
      // Code to play video for Option 4
      break;
      
    case "Option 5":
      // Code to play video for Option 5
      break;
      
    case "Option 6":
      // Code to play video for Option 6
      break;
      
    case "Option 7":
      // Code to play video for Option 7
      break;
      
    case "Option 8":
      // Code to play video for Option 8
      break;
      
    case "Option 9":
      // Code to play video for Option 9
      break;
      
    case "Option 10":
      // Code to play video for Option 10
      break;
      
    default:
      break;
  }
}