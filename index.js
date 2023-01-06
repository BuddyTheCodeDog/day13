//requires
const createAndPlayAudioElement = require('./audio');
const startNftRenderProcess = require('./startNftRenderProcess');
const ethers = require("ethers");

// create submitButton and NftImageContainer elements
const submitButton = document.getElementById("submit-button");
const addressInput = document.getElementById("address-input");

// create and play audio
createAndPlayAudioElement();

// button click function
submitButton.addEventListener("click", function(){
   startNftRenderProcess();   
});

// enter button function
addressInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    startNftRenderProcess();
  }
});