document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|co\.id|id|edu)$/i;


  if (nama === "") {
    alert("Nama tidak boleh kosong.");
    return;
  }

  if (nama.length < 3) {
    alert("Pendek banget woy!!");
    return;
  }

  if (/^\d+$/.test(nama)) {
    alert("Nama tidak boleh hanya angka.");
    return;
  }

  if (email === "") {
    alert("Email tidak boleh kosong.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Format email tidak valid.");
    return;
  }

  alert(`Terima kasih, ${nama}, pesan Anda sudah dikirim!`);
  this.reset();
});
