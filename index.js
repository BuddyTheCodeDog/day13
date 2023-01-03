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
        



          //table element
          const tableElement = document.createElement("div");
          tableElement.classList.add('nft-row');
        

        for(let i=0; i< response.data.ownedNfts.length; i++){
          const nft = response.data.ownedNfts[i];
          const nftName = nft.title;
          console.log(nftName);


          // Create a row element for each NFT
          const colElement = document.createElement("div");
          colElement.classList.add('nft-col');

          // Create a container under image
          const bottomContainer = document.createElement("div");
          bottomContainer.classList.add('nft-bottom-container');

          const bottomContainerDiv1 = document.createElement("div");
          bottomContainerDiv1.classList.add('nft-bottom-container-div1');

          const bottomContainerDiv2 = document.createElement("div");
          bottomContainerDiv2.classList.add('nft-bottom-container-div2');

          // Create a cell element for the NFT name
          const nameCellElement = document.createElement("h3");
          // Set the innerHTML of the cell element to the name of the NFT
          nameCellElement.innerHTML = nftName;

          
          // create a cell element for nft balance
          const nftBalanceBox = document.createElement('div');
          nftBalanceBox.className = 'item-balance';
          const nftBalance = nft.balance;
          nftBalanceBox.innerHTML = `Owned: ${nftBalance}`;

          // const nftDescBox = document.createElement('span');
          // nftDescBox.className = 'grid-item-description';
          // const nftDesc = nft.description;
          // nftDescBox.innerHTML = nftDesc;

          //creates image Cell
          const imageCellElement = document.createElement("div");
            imageCellElement.classList.add('img-cell');

          console.log(nft.media[0].raw);
          const imgElement = document.createElement('img');
          
          
          let urlImage = nft.media[0].gateway;

          if (urlImage.startsWith("ipfs://")) {
            urlImage = "https://ipfs.io/ipfs/" + urlImage.slice(8);
          }
          
          
          imgElement.src = urlImage;
          imgElement.onerror = function() {
            // Display placeholder image
            this.src = 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg';
          };
          
          // nftBox.appendChild(nftBalanceBox);
          // nftBox.appendChild(nftDescBox);
          // grid.appendChild(nftBox);

            // Append the img element to the cell element
            imageCellElement.appendChild(imgElement);
            // Append the cell elements to the row element
            bottomContainer.appendChild(nameCellElement);
            bottomContainer.appendChild(nftBalanceBox);
            
            colElement.appendChild(imageCellElement);

            // bottomContainer.appendChild(bottomContainerDiv1);
            // bottomContainer.appendChild(bottomContainerDiv2);
            colElement.appendChild(bottomContainer);

            // Append the row element to the table element
            tableElement.appendChild(colElement);
        }

        // Append the table element to the nft-images-container element
        document.getElementById("nft-images-container").appendChild(tableElement);
      });
      
      
      
       
});

    