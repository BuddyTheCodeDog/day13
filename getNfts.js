import axios from "axios";
function getNfts(addressInput){
    const apiKey ="kk09WTbfHugG0JEXeKiRzQGezPdT6R_I";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const ownerAddr = addressInput.value; //addressInput.value;

    var config = {
        method: 'get',
        url: `${baseURL}?owner=${ownerAddr}`
    };


    return new Promise(function(resolve){

        axios(config).then(function(response){
            resolve(response);
        
        })

    })
    

}

module.exports = getNfts