const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');






// Bagus! Kita akan buat **validasi real-time + feedback visual**, lalu saya jelaskan setiap bagian. Ini akan membuat form kamu terasa lebih interaktif dan profesional.

// ---

// ## ✅ Struktur Form HTML + Pesan Error

// Tambahkan `span` untuk pesan error di bawah setiap input:

// ```html
// <form id="contactForm" class="contact-form">
//   <div class="form-group">
//     <input type="text" id="name" name="name" placeholder="Nama" />
//     <span class="error-message" id="nameError"></span>
//   </div>

//   <div class="form-group">
//     <input type="email" id="email" name="email" placeholder="Email" />
//     <span class="error-message" id="emailError"></span>
//   </div>

//   <div class="form-group">
//     <textarea id="message" name="message" placeholder="Pesan Anda"></textarea>
//     <span class="error-message" id="messageError"></span>
//   </div>

//   <button type="submit">Kirim</button>
// </form>
// ```

// ---

// ## ✅ CSS (Visual Feedback)

// Tambahkan gaya untuk input yang valid/invalid dan error message:

// ```html
// <style>
//   .error-message {
//     color: red;
//     font-size: 0.8rem;
//     margin-top: 2px;
//     display: block;
//   }

//   input.invalid, textarea.invalid {
//     border: 2px solid red;
//   }

//   input.valid, textarea.valid {
//     border: 2px solid green;
//   }
// </style>
// ```

// ---

// ## ✅ JavaScript: Validasi Real-Time + Saat Submit

// ```html
// <script>
//   const form = document.getElementById('contactForm');
//   const name = document.getElementById('name');
//   const email = document.getElementById('email');
//   const message = document.getElementById('message');

//   const nameError = document.getElementById('nameError');
//   const emailError = document.getElementById('emailError');
//   const messageError = document.getElementById('messageError');

//   // Fungsi validasi
//   function validateName() {
//     if (name.value.trim() === '') {
//       name.classList.add('invalid');
//       name.classList.remove('valid');
//       nameError.textContent = 'Nama wajib diisi.';
//       return false;
//     } else {
//       name.classList.remove('invalid');
//       name.classList.add('valid');
//       nameError.textContent = '';
//       return true;
//     }
//   }

//   function validateEmail() {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!regex.test(email.value)) {
//       email.classList.add('invalid');
//       email.classList.remove('valid');
//       emailError.textContent = 'Format email tidak valid.';
//       return false;
//     } else {
//       email.classList.remove('invalid');
//       email.classList.add('valid');
//       emailError.textContent = '';
//       return true;
//     }
//   }

//   function validateMessage() {
//     if (message.value.trim().length < 10) {
//       message.classList.add('invalid');
//       message.classList.remove('valid');
//       messageError.textContent = 'Pesan minimal 10 karakter.';
//       return false;
//     } else {
//       message.classList.remove('invalid');
//       message.classList.add('valid');
//       messageError.textContent = '';
//       return true;
//     }
//   }

//   // Real-time validation saat user mengetik
//   name.addEventListener('input', validateName);
//   email.addEventListener('input', validateEmail);
//   message.addEventListener('input', validateMessage);

//   // Validasi saat form disubmit
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const isNameValid = validateName();
//     const isEmailValid = validateEmail();
//     const isMessageValid = validateMessage();

//     if (isNameValid && isEmailValid && isMessageValid) {
//       alert('Form berhasil dikirim!');
//       form.reset();

//       // Reset tampilan visual
//       name.classList.remove('valid');
//       email.classList.remove('valid');
//       message.classList.remove('valid');
//     }
//   });
// </script>
// ```

// ---

// ## 📘 Penjelasan Singkat

// | Bagian                                 | Penjelasan                                                  |
// | -------------------------------------- | ----------------------------------------------------------- |
// | `input.classList.add('invalid')`       | Menambahkan class untuk border merah jika input salah.      |
// | `textContent = '...'`                  | Menampilkan pesan error di bawah input.                     |
// | `eventListener('input')`               | Menjalankan validasi setiap kali user mengetik (real-time). |
// | `regex.test(email.value)`              | Mengecek apakah email sesuai format.                        |
// | `form.addEventListener('submit', ...)` | Mencegah form terkirim jika masih ada error.                |

// ---

// Kalau kamu mau validasi untuk tipe input lain (seperti nomor telepon, dropdown, checkbox), saya bisa bantu juga. Mau ditambahkan validasi lain?
