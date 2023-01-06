import axios from "axios";
const spinnerFunctions = require('./spinner');
const submitButton = document.getElementById("submit-button");

function getNfts(addressInput){
    const apiKey ="kk09WTbfHugG0JEXeKiRzQGezPdT6R_I";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const ownerAddr = addressInput.value; //addressInput.value;

    var config = {
        method: 'get',
        url: `${baseURL}?owner=${ownerAddr}`
    };


    return new Promise(function (resolve, reject) {
        axios(config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            spinnerFunctions.hideSpinner();
            addressInput.value = '';
            submitButton.disabled = false;
            const wrongAddressContainer = document.getElementById("wrong-address-container");
            wrongAddressContainer.innerHTML = "Error: Invalid Ethereum address or ENS name";
            
            reject(error);
          });
      });
    }

module.exports = getNfts