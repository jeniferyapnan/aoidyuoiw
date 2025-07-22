const express = require('express');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types'); // Panggil alat baru kita

const app = express();

// Endpoint utama yang dipake bot (ganti /waifu kalo perlu)
app.get('/api/waifu', (req, res) => {
  try {
    // Alamat folder 'images' di dalem project kita
    const imagesDir = path.join(__dirname, '..', 'images');

    // Baca semua nama file yang ada di dalem folder 'images'
    const imageFiles = fs.readdirSync(imagesDir);

    // Kalo foldernya kosong, kasih error
    if (!imageFiles || imageFiles.length === 0) {
      return res.status(404).json({ error: 'Folder /images kosong atau tidak ditemukan.' });
    }

    // Pilih satu nama file secara acak
    const randomImageName = imageFiles[Math.floor(Math.random() * imageFiles.length)];

    // Alamat lengkap ke file gambar yang dipilih
    const imagePath = path.join(imagesDir, randomImageName);

    // Baca data mentah gambarnya langsung dari file
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Tentukan tipe kontennya (misal: 'image/jpeg')
    const contentType = mime.lookup(imagePath);

    // Kirim gambarnya
    res.setHeader('Content-Type', contentType);
    res.send(imageBuffer);

  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: 'Gagal memproses permintaan gambar.', details: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Server API (Mode Lokal Anti Gagal) udah nyala!');
});

module.exports = app;
