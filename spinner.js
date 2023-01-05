const spinner = document.getElementById('spinner');
const spinnerContainer = document.getElementById('spinner-container');

function showSpinner(){
    spinnerContainer.style.display= 'block';
    spinner.style.display = 'flex';
  }
  
  function hideSpinner() {
    spinner.style.display = 'none';
    spinnerContainer.style.display= 'none';
    console.log('teset');
  
  }

  module.exports = {
    showSpinner: showSpinner,
    hideSpinner: hideSpinner
  };