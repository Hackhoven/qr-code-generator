function generateQRCode() {
    var text = document.getElementById("text-input").value;
    var qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; 
    
    if (text.trim() !== "") {
        new QRCode(qrContainer, {
            text: text,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        document.getElementById("download-button").style.display = "block";
    } else {
        document.getElementById("download-button").style.display = "none";
    }
}



function downloadQRCode() {
    var canvas = document.querySelector('#qrcode canvas');
    if (canvas) {
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var link = document.createElement('a');
        link.download = 'my-qr-code.png';
        link.href = image;
        link.click();
    } else {
        alert("No QR code available to download.");
    }
}

