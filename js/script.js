
function toggleNavbar() {
  const nav = document.querySelector('.navbar-mid');
  nav.classList.toggle('active');
}


// button1
function handleLinkClick(buttonId, loadingId) {
  const link = document.getElementById(buttonId);
  const loading = document.getElementById(loadingId);
  const url = link.getAttribute('href');

  link.addEventListener('click', function(e) {
    e.preventDefault();
    link.style.pointerEvents = 'none';
    loading.style.display = 'flex';

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



let nama = "raekhan";
let umur = 25;
let isStudent = true;
let campus = "Univ bhayangkara";



console.log(nama);
console.log(umur);
console.log(isStudent);
console.log(campus); 

if (umur < 13) {
  console.log("halo " + nama + ", Kamu belum cukup umur.");
} else if (umur >= 13 && umur <= 19 ) {
  console.log("halo " + nama + ", Kamu Remaja.");
} else {
  console.log("halo " + nama + ", Kamu dewasa.");
}

if (nama){
  console.log(`halo ${nama}!`);
} else {
  console.log("nama belum di isi");
}

if (!campus) {
  console.log("belum terdaftar");
}else { if (isStudent) {
  console.log(`Mahasiswa Aktif di ${campus}`);
}
 else {
  console.log("Pendaftaran belum berhasil");
} }



if (isStudent) {
  console.log("Terdaftar");
} else {
  console.log("Selesaikan Pendaftaran");
}

if (isStudent) { console.log(`halo saya ${nama}, saya kuliah di ${campus}`);}
else {
  console.log("belum terdaftar");
}

function haiDude () {
  console.log("halo elvira!");
}

haiDude ();

function hitungUmur(tahunLahir, tahunSekarang) {
  let umur = tahunSekarang - tahunLahir;
  console.log(`Umur kamu adalah ${umur} tahun.`);
}

hitungUmur(2000, 2025);

function hitungSisaGaji(gaji, pengeluaran, uangMakan) {
  let sisa = gaji - pengeluaran - uangMakan;
  console.log(`gaji: Rp ${gaji}`);
  console.log(`Kost dan Transportasi : Rp ${pengeluaran}`);
  console.log(`Uang Makan : ${uangMakan}`)
  console.log(`Sisa Gaji: Rp ${sisa}`);
}

hitungSisaGaji (4800000, 2000000, 1000000);

function laporanKeuangan(nama, gaji, pengeluaran) {
  // Hitung sisa gaji
  const sisa = gaji - pengeluaran;
  
  // Helper untuk format angka ke "1.234.567"
  const formatRupiah = (angka) => {
    return angka.toLocaleString('id-ID');
  };
  
  // Cetak laporan
  console.log(`Halo ${nama}!`);
  console.log(`Gaji Bulanan Anda: Rp ${formatRupiah(gaji)}`);
  console.log(`Total Pengeluaran: Rp ${formatRupiah(pengeluaran)}`);
  console.log(`Sisa Gaji: Rp ${formatRupiah(sisa)}`);
}

// Contoh pemakaian:
laporanKeuangan("Elvira", 4800000, 2000000);


