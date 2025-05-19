
// button1
function handleLinkClick(buttonId, loadingId) {
  const link = document.getElementById(buttonId);
  const loading = document.getElementById(loadingId);
  const url = link.getAttribute('href');

  link.addEventListener('click', function(e) {
    e.preventDefault();
    link.style.pointerEvents = 'none';
    loading.style.display = 'inline';

    setTimeout(()=>{
      window.open(url, '_blank');
      loading.style.display = 'none';
      link.style.pointerEvents = 'auto';
    }, 2000);
});
}
  

// aktifkan fungsi btn
handleLinkClick('lihatCv','interactionMessage');
handleLinkClick('lihatCv2','interactionMessage2');

// end========================================

// ------------------------------------------------------


// Menghandle pengiriman formulir
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah pengiriman form standar

  const nama = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|co\.id|id|edu)$/i;

  // Validasi input
  if (nama === "") {
    alert("Nama tidak boleh kosong.");
    return;
  }

  if (nama.length < 3) {
    alert("Pendek Banget Nama lo!!");
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

  // Pesan sukses
  alert(`Terima kasih, ${nama}, pesan Anda sudah dikirim!`);

  // Mereset form setelah pengiriman
  this.reset();
});
