document.addEventListener("DOMContentLoaded", () => {
  const facebook = document.getElementById("facebook");
  const botonfacebook = facebook.querySelector("button");
  botonfacebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/share/1AGwGMytzF/?mibextid=wwXIfr");
  });
  const instagram = document.getElementById("instagram");
  const botoninstagram = instagram.querySelector("button");
  botoninstagram.addEventListener("click", () => {
    window.open(
      "https://www.instagram.com/sectaselectattoo?igsh=MXMyd2h2a2p1ZHNrMg=="
    );
  });
  const whatsApp = document.getElementById("whatsApp");
  const botonwhatsApp = whatsApp.querySelector("button");
  botonwhatsApp.addEventListener("click", () => {
    window.open("https://wa.me/573117297379");
  });
});
