function clearImagesContainer(nftImagesContainer){
    while (nftImagesContainer.firstChild) {
      nftImagesContainer.removeChild(nftImagesContainer.firstChild);
      
    }
  
  }

  module.exports = clearImagesContainer