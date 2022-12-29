import axios from "axios";
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// we use `import axios from "axios"` which is another way of saying `const axios = require("axios")`
// it is jsut better supported in the browser!
//0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(){
    const addressInput = document.getElementById("address-input");
    console.log(addressInput.value);
    Moralis.start({
        apiKey: "PWYYxUpvzo6Nw6M3GYkU9NRnQexXm4wFFpaO60upGlLZWlLXwmv7EcCVI2fNBtaY",
        // ...and any other configuration
      }).then(() => {
        const address = "0x7B2c85591FD2ed6B33E6C956601b86d0c8230ada";
      
        const chain = EvmChain.ETHEREUM;
        
      
        return Moralis.EvmApi.nft.getWalletNFTs({
            address,
            chain,
            
        });
      }).then((response) => {
        console.log(response.toJSON());
        const listResults = response.toJSON();
        console.log(listResults);
        console.log(listResults.result);

        for(let i=0; i< listResults.result.length; i++){
            const nft = listResults.result[i];
            const nftName = nft.name;
            console.log(nftName);
            const nftBox = document.createElement('div');
            nftBox.className = 'nft-box';
            nftBox.innerHTML = nftName;
            document.body.appendChild(nftBox);
        }

      });
    

    //   const apiKey = "";
    //   const baseURL = ``;
    //   const ownerAddr = address;

    //   var config = {
    //     method: 'get',
    //     url: `${baseURL}?owner=${ownerAddr}`
    //   };

    //   axios.get(url).then(function(response){
    //     console.log(response.data);
    //   });
});

