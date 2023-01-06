//requires
const renderNftToPage = require('./render');
const getNfts = require('./getNfts');

const spinnerFunctions = require('./spinner');
const clearImagesContainer = require('./clearImagesContainer');

// create submitButton and NftImageContainer elements
const submitButton = document.getElementById("submit-button");
const nftImagesContainer = document.getElementById("nft-images-container");
const addressInput = document.getElementById("address-input");
const wrongAddressContainer = document.getElementById("wrong-address-container");





function startNftRenderProcess(){


  
    //clear ImageContainer , show loading spinner , disables submit button
    wrongAddressContainer.innerHTML = "";
    clearImagesContainer(nftImagesContainer);
    spinnerFunctions.showSpinner();
    submitButton.disabled = true;
  
    // gets nft array by address and then runs function to renders nft to page
    getNfts(addressInput).then(function(response){

        console.log(response);
  
      // creates tableElement element
      const tableElement = document.createElement("div");
      tableElement.classList.add('nft-row');
  
      // loops through nft array and renders nft to page
      for(let i=0; i< response.data.ownedNfts.length; i++){
        const nft = response.data.ownedNfts[i];
        renderNftToPage(nft,tableElement,i);
      }
      
      // Appends the table element to the nftImagesContainer element
      nftImagesContainer.appendChild(tableElement);
  
      //hides spinner, resets addressInput and enables Submit Button
      spinnerFunctions.hideSpinner();
      addressInput.value = '';
      submitButton.disabled = false;
  
      });   
  
  };

  module.exports = startNftRenderProcess;