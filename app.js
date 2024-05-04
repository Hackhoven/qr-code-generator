function generateQRCode() {
    var text = document.getElementById("text-input").value;
    var qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    if(text.trim() != "") {
        var qrCode = new QRCode(qrContainer, {
            text: text,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}