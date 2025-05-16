document.getElementById("whatsappBtn").addEventListener("click", function () {
    const phoneNumber = "919036056057";
    const message = encodeURIComponent("Hello, I'm interested in your services. Please get in touch with me.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  });
  