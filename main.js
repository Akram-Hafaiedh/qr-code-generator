const generateBtn = document.querySelector('.generate');
const urlInput = document.getElementById('website');
const qrContainer = document.getElementById("qr-container")
console.log("🚀 ~ file: main.js:3 ~ website", website)
generateBtn.addEventListener('click',()=>{
    let website = urlInput.value;
    if(website){
        let qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.textContent = "";
        new QRCode(qrcode, website)
        qrContainer.style.width = "80%"
        // qrContainer.style.display = "block";
  
    }else{
        alert("Please enter a valid URL");
    }
})
urlInput.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        generateBtn.click();
    }
})
