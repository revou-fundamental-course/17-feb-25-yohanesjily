// ini javascript External //

console.log('Success Load External JS');

function validateForm() {
    let nameInput = document.getElementById('name-input');
    let addressInput = document.getElementById('address-input');
    let emailInput = document.getElementById('email-input');
    
    // Kondisi Validasinya
    if (nameInput.value == '') {
    alert('Nama tidak boleh kosong');
    return false;
    }
    if (emailInput.value == '') {
        alert('Email tidak boleh kosong');
        return false;
        } else {
            alert('Welcome ' + nameInput.value);
        } 

}

// For Index Identifier
let indexBanner = 0;

showBanner();

function nextBanner() {
    // Incremnt IndexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner')
   
    // Reset Condition
  if (indexBanner > banner.length - 1) { 
    indexBanner = 0;
  }

    //loop untuk hide semua  
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }

    // Show Banner
    banner[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);