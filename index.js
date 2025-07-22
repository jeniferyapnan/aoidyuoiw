const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const app = express();

// Endpoint buat nampilin halaman dashboard (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint BARU buat ngecek status API
app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Endpoint BARU buat ngasih data link ke dashboard
app.get('/api/get-links', (req, res) => {
  const dbPath = path.join(__dirname, 'db.json');
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Gagal baca db.json' });
    }
    try {
      const database = JSON.parse(data);
      res.json({ links: database.waifu || [] });
    } catch (parseError) {
      res.status(500).json({ error: 'Format db.json salah' });
    }
  });
});

// Endpoint LAMA yang jadi kurir gambar (tetep dipake bot)
app.get('/api/waifu', async (req, res) => {
  const dbPath = path.join(__dirname, 'db.json');
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    const database = JSON.parse(data);
    const images = database.waifu;

    if (!images || images.length === 0) {
      return res.status(404).json({ error: 'Database gambar kosong.' });
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];

    const imageResponse = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    });

    res.setHeader('Content-Type', imageResponse.headers['content-type']);
    res.send(imageResponse.data);
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: 'Gagal memproses permintaan gambar.' });
  }
});

module.exports = app;
