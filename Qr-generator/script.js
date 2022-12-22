const container = document.querySelector(".container")

const qrInpute = container.querySelector(".form input")
const generateBtn = container.querySelector(".form button")
const qrImage= container.querySelector(".qr-code img")
generateBtn.addEventListener('click', () =>{
    let qrValue = qrInpute.value;
    console.log(qrValue);
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR code......"
    qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener("load", ()=>{
//once qr code loaded
        container.classList.add("active");
        generateBtn.innerText = "Generate QR code"
    });
});
    qrInpute.addEventListener("keyup", ()=>{
        if(!qrInpute.value)
        {
            container.classList.remove("active"); 
        }
    });

