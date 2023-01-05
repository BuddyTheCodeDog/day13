
//requires
const renderNftToPage = require('./render');
const getNfts = require('./getNfts');
const createAndPlayAudioElement = require('./audio');
const spinnerFunctions = require('./spinner');
const clearImagesContainer = require('./clearImagesContainer')

// create submitButton and NftImageContainer elements
const submitButton = document.getElementById("submit-button");
const nftImagesContainer = document.getElementById("nft-images-container");

// create and play audio
createAndPlayAudioElement();

// button click function
submitButton.addEventListener("click", function(){
  
  //create addressInput element
  const addressInput = document.getElementById("address-input");

  //clear ImageContainer , show loading spinner , disables submit button
  clearImagesContainer(nftImagesContainer);
  spinnerFunctions.showSpinner();
  submitButton.disabled = true;

  // gets nft array by address and then runs function to renders nft to page
  getNfts(addressInput).then(function(response){

    // creates tableElement element
    const tableElement = document.createElement("div");
    tableElement.classList.add('nft-row');

    // loops through nft array and renders nft to page
    for(let i=0; i< response.data.ownedNfts.length; i++){
      const nft = response.data.ownedNfts[i];
      renderNftToPage(nft,tableElement);
    }
    
    // Appends the table element to the nftImagesContainer element
    nftImagesContainer.appendChild(tableElement);

    //hides spinner, resets addressInput and enables Submit Button
    spinnerFunctions.hideSpinner();
    addressInput.value = '';
    submitButton.disabled = false;

    });   
});

    