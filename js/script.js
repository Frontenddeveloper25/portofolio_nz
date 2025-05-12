
// button1
// Menghandle interaksi saat tombol "Lihat CV" diklik
function showInteraction(event) {
  event.preventDefault(); // Menghindari default action link (pembukaan halaman)

  var interactionMessage = document.getElementById("interactionMessage");
  if (interactionMessage) {
    interactionMessage.classList.add("show"); // Menampilkan pesan interaksi
  }

  // Setelah 2 detik, membuka link CV
  setTimeout(function() {
    // Membuka link CV
    window.open("https://www.canva.com/design/DAGl1xiUTOc/TEih2FxJzexHAat8aOyxJQ/edit", "_blank");

    // Setelah halaman dibuka, menyembunyikan pesan interaksi
    interactionMessage.classList.remove("show");
  }, 2000); // 2 detik delay sebelum membuka link dan menghilangkan pesan
}

function showInteraction(event) {
  event.preventDefault(); // Menghindari default action link (pembukaan halaman)

  var interactionMessage2 = document.getElementById("interactionMessage");
  if (interactionMessage2) {
    interactionMessage2.classList.add("show"); // Menampilkan pesan interaksi
  }

  // Setelah 2 detik, membuka link CV
  setTimeout(function() {
    // Membuka link CV
    window.open("https://id.linkedin.com/in/neza-raekhan-maulana-867a92181", "_blank");

    // Setelah halaman dibuka, menyembunyikan pesan interaksi
    interactionMessage.classList.remove("show");
  }, 2000); // 2 detik delay sebelum membuka link dan menghilangkan pesan
}

// Menghandle interaksi saat tombol "Lihat CV" diklik



// ------------------------------------------------------


// Menambahkan event listener untuk tombol "Lihat CV"
document.getElementById("lihatCv").addEventListener("click", showInteraction);

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
