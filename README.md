# 7-Days UMN
UAS PTI Kelompok 1

7-Days UMN - Kelompok 1 | UTS PTI (IF231 - E, EL)
- Hansen (00000060325)
- Liusianto (00000061560)
- Marselino Lengyu Pantouw (00000061909)
- Prudence Tendy (00000060765)
- William Rayhan Harsono (00000061964)

## JAM
Jam akan otomatis berjalan mengambil current time dari player dan berjalan sesuai dengan aturan game dimana 1 detik = 1 menit.

## BACKGROUND
Background akan berubah sesuai dengan waktu dan lokasi. Terdapat efek tambahan juga yang sesuai dengan cuaca
  - Jam 19 - 4.59 (< 5): selamat malam -> background hitam transparan
  - Jam 5 - 10.59 (< 11): selamat pagi -> background kuning muda transparan
  - Jam 11 - 14.59 (< 15): selamat siang -> background biru transparan
  - Jam 15 - 18.59 (< 19): Selamat sore -> background orang/jingga transparan
  - Jam 19 - 4.59: selamat malam -> background hitam transparan

## GAMBAR KARAKTER
  - Pemilihan karakter pada menu utama
  - Karakter yang dipilih mempengaruhi gambar ketika melakukan aktivitas

## BUTTON
  - Pojok kanan bawah: dapat digunakan untuk memutar musik (musik default, hanya 1). Ketika musik sedang berjalan, tekan tombol musik sekali lagi untuk pause/mematikan musik
  - Pojok kanan atas dalam game: minimize, maximize, close
	  - minimize: keluar dari fullscreen
	  - maximize: memasukki mode fullscreen. Klik minimize (-) untuk keluar dari mode fullscreen
	  - close: kembali ke menu awal

## CARA BERMAIN
  - Buka game 7-Days UMN
  - Pilih karakter dan masukkan nama serta pilih program studi
  - Setelah mengisi data, tekan tombol **Play!** untuk memainkan game 7-Days UMN
  - Sebelum bermain, pemain harus menekan tombol **Click here first!** yang berwarna merah
  - Terdapat 4 bagian pada game
    - Atas: berisikan progress dari player yang harus diisi dan diperhatikan selama permainan berlangsung.
    - Bawah-kiri (Go to): berisikan lokasi yang dapat dikunjungi oleh player serta terdapat smartphone yang dapat digunakan untuk membaca berita
    - Tengah: berisikan salam, cuaca, karakter, dan tombol untuk melihat Peraturan & About us.
    - Bawah-kanan: berisikan lokasi saat ini, program studi, dan tombol-tombol untuk melakukan aktivitas sesuai dengan tempat dimana player sedang berada.
  - Progress bar dapat bertambah dan berkurang apabila user pergi ke suatu tempat atau melakukan aktivitas.
  - Ketika permainan selesai, akan muncul sebuah halaman yang akan menampilkan riwayat selama bermain. Apabila button pada halaman tersebut ditekan, player akan kembali ke menu awal.

## PERATURAN
Terdapat 6 progress bar yang dapat di-isi oleh player dengan melakukan kegiatan yang sesuai melalui button di bawah.
	Progress Bar
  - Makan
  - Tidur
  - Main
  - Belajar
  - Kesehatan
  - Minum
  
  Istilah yang digunakan
  - Aktivitas: aktivitas yang dapat dilakukan player ketika berada di tempat tertentu
  - Bertambah: progress bar akan bertambah ketika karakter melakukan aktivitas
  - Menambah: melakukan aktivitas tertentu akan menambah progress lain
  - Mengurangi: mengurangi progress lain
  - Berkurang: mengurangi progress sendiri
  - Fitur tambahan: fitur unik yang menjadi tambahan pada progress tertentu
  - Game over: kondisi dimana game berakhir karena suatu kondisi

## PERATURAN - LOKASI
Berpindah tempat dari satu tempat ke tempat lainnya tentu menguras tenaga dan waktu. Maka dari itu, progress dari makan, tidur, dan main akan berkurang ketika player berpindah lokasi.

### 1) RUMAH
- Aktivitas: makan, tidur, belajar, main, minum, olahraga

### 2) KAMPUS
- Aktivitas: makan, belajar, minum 
- Fitur tambahan: Buka pukul 8 - 17

### 3) SUPERMARKET
- Aktivitas: makan, minum, belanja 
- Fitur tambahan:
	- Buka pukul 10 - 23
	- Ketika BELANJA, makanan akan bertambah 

### 4) RUMAH SAKIT
- Aktivitas: konsultasi

## PERATURAN - AKTIVITAS
Setiap aktivitas memiliki dampaknya masing-masing. Ada yang menambah progress dan ada yang mengurangi progress. Apabila suatu progress mencapai angka 0 dan player tidak melakukan tindakan tertentu, maka akan ada **konsekuensinya**.
List aktivitas
- Makan
- Tidur
- Main
- Belajar
- Olahraga
- Minum
- Belanja
- Konsultasi

### 1) MAKAN
- Bertambah: makan
- Menambah: kesehatan
- Mengurangi: tidur, main, belajar, minum
- Berkurang: apabila player lapar, progress makan akan berkurang (lapar)
- Fitur tambahan: terdapat 3 (tiga) jenis makanan dengan persediaan yang bisa didapatkan melalui SUPERMARKET
- Game over: apabila progress makan hingga 0

### 2) TIDUR
- Bertambah: tidur
- Menambah: kesehatan
- Mengurangi: makan, tidur, main, belajar, minum
- Berkurang: apabila player ngantuk, progress tidur akan berkurang (ngantuk)
- Fitur tambahan: ketika progress tidur mencapai 0, player akan otomatis tidur dengan waktu yang lebih lama

### 3) MAIN
- Bertambah: main
- Menambah: -
- Mengurangi: makan, tidur, belajar, minum, kesehatan
- Berkurang: apabila player tidak bermain dalam waktu tertentu (bosan)
- Fitur tambahan: -
- Game over: -

### 4) BELAJAR
- Bertambah: belajar
- Menambah: -
- Mengurangi: makan, tidur, main, minum, kesehatan
- Berkurang: apabila player tidak belajar dalam waktu tertentu (kurang belajar)
- Fitur tambahan: player mempelajari mata kuliah berdasarkan program studi yang dipilih
- Game over: -

### 5) OLAHRAGA
- Bertambah: kesehatan
- Menambah: -
- Mengurangi: makan, tidur, main, belajar, minum
- Berkurang: apabila player tidak olahraga dalam waktu tertentu (kurang gerak)
- Fitur tambahan: -
- Game over: -

### 6) MINUM
- Bertambah: minum
- Menambah: kesehatan
- Mengurangi: main, belajar
- Berkurang: apabila player tidak minum dalam waktu tertentu (haus)
- Fitur tambahan: -
- Game over: -

### 7) BELANJA (Supermarket)
- Bertambah: -
- Menambah: stok makanan
- Mengurangi: makan, tidur, main, belajar, kesehatan, minum
- Berkurang: -
- Fitur tambahan: -
- Game over: -

### 8) KONSULTASI (Rumah Sakit)
- Bertambah: kesehatan
- Menambah: -
- Mengurangi: makan, tidur, main, belajar, minum
- Berkurang: apabila player tidak melakukan konsultasi atau sering beraktivitas (sakit / lelah)
- Fitur tambahan: -
- Game over: apabila progress kesehatan mencapai 0

## SUMMARY
Ketika player bermain hingga hari ke 7 pukul 23:59, player akan mendapatkan rincian berdasarkan apa yang telah player lakukan selama 7 hari.
Terdapat 3 kriteria pada kesimpulan
- Good: sangat baik
- Ok: baik
- Bad: buruk, perlu menjadi perhatian untuk player kedepannya