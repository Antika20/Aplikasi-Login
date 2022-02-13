/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */
/** 
* Membuat variabel loginFormElement untuk tampilan form.
* @konstan {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
/** 
* Membuat variabel inputEmailElement untuk tampilan input email.
* @konstan {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');
/** 
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @konstan {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
 * Membuat variabel yang diharapkanEmail untuk menyimpan informasi email sementara.
 * @konstan {string}
 */
const expectedEmail = 'admin@dicoding.com';
/** 
 * Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
 * @konstan {string}
 */
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
   * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat tombol ditekan.
   * @konstan {string}
   */
  const email = inputEmailElement.value;
  /** 
   * Membuat variabel password untuk menyimpan niali password yang didapatkan saat tombol ditekan.
   * @konstan {string}
   */
  const password = inputPasswordElement.value;
  
  /* Komentar : bahwa nilai email dan kata sandi sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
     /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {
     /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
