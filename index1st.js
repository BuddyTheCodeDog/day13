import axios from "axios";



const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(){
    const addressInput = document.getElementById("address-input");
    console.log(addressInput.value);

    const apiKey ="kk09WTbfHugG0JEXeKiRzQGezPdT6R_I";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const ownerAddr = addressInput.value; //addressInput.value;

    var config = {
        method: 'get',
        url: `${baseURL}?owner=${ownerAddr}`
    };

    axios(config).then(function(response){
        console.log(response.data);
        const grid = document.querySelector('.grid');
        grid.innerHTML = '';
        

        for(let i=0; i< response.data.ownedNfts.length; i++){
          const nft = response.data.ownedNfts[i];
          const nftName = nft.title;
          console.log(nftName);
          const nftBox = document.createElement('div');
          nftBox.className = 'grid-item';
          nftBox.innerHTML = nftName;

          const nftBalanceBox = document.createElement('div');
          nftBalanceBox.className = 'grid-item-balance';
          const nftBalance = nft.balance;
          nftBalanceBox.innerHTML = `Owned: ${nftBalance}`;

          const nftDescBox = document.createElement('span');
          nftDescBox.className = 'grid-item-description';
          const nftDesc = nft.description;
          nftDescBox.innerHTML = nftDesc;

          console.log(nft.media[0].raw);
          const imgElement = document.createElement('img');
          imgElement.className = 'grid-item-image';
          imgElement.width = "200"; // sets the width to 200 pixels
          imgElement.height = "200"; // sets the height to 200 pixels
          let urlImage = nft.media[0].gateway;

          if (urlImage.startsWith("ipfs://")) {
            urlImage = "https://ipfs.io/ipfs/" + urlImage.slice(8);
          }
          
        
          imgElement.src = urlImage;
          nftBox.appendChild(imgElement);
          nftBox.appendChild(nftBalanceBox);
          nftBox.appendChild(nftDescBox);
          grid.appendChild(nftBox);
        }
      });
      
      
      
       
});

    