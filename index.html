<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swaifu API Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .glassmorphism {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .ping-indicator .ping-dot {
            animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
            75%, 100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    </style>
</head>
<body class="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center p-4">

    <div class="w-full max-w-3xl mx-auto">
        
        <header class="text-center mb-8">
            <h1 class="text-5xl font-black text-white tracking-tighter">Swaifu API</h1>
            <p class="text-gray-400 mt-2">Dashboard buat ngelola dan ngetes API gambarmu.</p>
        </header>

        <!-- Status API -->
        <div id="status-card" class="glassmorphism rounded-2xl p-4 mb-8 flex items-center justify-between transition-all duration-300">
            <div class="flex items-center gap-3">
                <div class="ping-indicator relative flex h-3 w-3">
                    <span id="ping-animation" class="ping-dot absolute inline-flex h-full w-full rounded-full opacity-75"></span>
                    <span id="ping-static" class="relative inline-flex rounded-full h-3 w-3"></span>
                </div>
                <span id="status-text" class="font-semibold">Mengecek status...</span>
            </div>
            <div id="endpoint-url" class="text-sm text-gray-400 font-mono bg-gray-800 px-2 py-1 rounded-md">/api/waifu</div>
        </div>

        <!-- Tes API -->
        <section class="glassmorphism p-6 rounded-2xl mb-8">
            <h2 class="text-2xl font-bold mb-4 text-white">Uji Coba Endpoint</h2>
            <div class="text-center">
                <button id="testApiButton" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-600/30">
                    Ambil Gambar Random
                </button>
                <div id="imageResult" class="mt-6 p-4 bg-gray-800/50 rounded-lg min-h-[250px] flex items-center justify-center hidden border border-gray-700">
                    <p id="loadingText" class="text-gray-400">Lagi nyari gambar...</p>
                    <img id="apiImage" src="" alt="Hasil dari API" class="max-w-full max-h-96 rounded-lg hidden">
                </div>
            </div>
        </section>

        <!-- Kelola Database -->
        <section class="glassmorphism p-6 rounded-2xl">
            <h2 class="text-2xl font-bold mb-2 text-white">Kelola Database Link</h2>
            <p class="text-sm text-gray-400 mb-6">Ini cuma alat bantu. Lo tetep harus **copy-paste** hasilnya ke file `db.json` di GitHub.</p>
            
            <div class="mb-6">
                <label for="newImageUrl" class="block mb-2 font-medium text-gray-300">Tempel Link Gambar Baru (dari GitHub/jsDelivr):</label>
                <div class="flex flex-col sm:flex-row gap-3">
                    <input type="url" id="newImageUrl" placeholder="https://cdn.jsdelivr.net/gh/..." class="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 focus:border-indigo-500 focus:ring-indigo-500 transition text-white">
                    <button id="addLinkButton" class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30">
                        Tambah
                    </button>
                </div>
            </div>

            <div>
                <label for="updatedJson" class="block mb-2 font-medium text-gray-300">Hasil `db.json` Siap Pakai:</label>
                <div class="relative">
                    <textarea id="updatedJson" rows="12" class="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 text-sm font-mono text-gray-300" readonly></textarea>
                    <button id="copyButton" class="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1 px-3 rounded-md text-xs transition-all">
                        Copy
                    </button>
                </div>
            </div>
        </section>

    </div>

    <script>
        // --- Elemen DOM ---
        const statusText = document.getElementById('status-text');
        const pingAnimation = document.getElementById('ping-animation');
        const pingStatic = document.getElementById('ping-static');
        const testApiButton = document.getElementById('testApiButton');
        const imageResult = document.getElementById('imageResult');
        const loadingText = document.getElementById('loadingText');
        const apiImage = document.getElementById('apiImage');
        const addLinkButton = document.getElementById('addLinkButton');
        const newImageUrl = document.getElementById('newImageUrl');
        const updatedJson = document.getElementById('updatedJson');
        const copyButton = document.getElementById('copyButton');

        let currentLinks = [];

        // --- Fungsi ---
        const checkApiStatus = async () => {
            try {
                const response = await fetch('/api/status');
                if (!response.ok) throw new Error('Offline');
                const data = await response.json();
                if (data.status === 'ok') {
                    statusText.textContent = 'API Online';
                    pingAnimation.classList.add('bg-green-400');
                    pingStatic.classList.add('bg-green-500');
                } else {
                    throw new Error('Offline');
                }
            } catch (error) {
                statusText.textContent = 'API Offline';
                pingAnimation.classList.add('bg-red-400');
                pingStatic.classList.add('bg-red-500');
            }
        };

        const fetchInitialData = async () => {
            try {
                const response = await fetch('/api/get-links');
                const data = await response.json();
                if (data.links) {
                    currentLinks = data.links;
                    updateJsonOutput();
                }
            } catch (error) {
                console.error('Gagal fetch data awal:', error);
                updatedJson.value = 'Gagal memuat data awal. Cek console.';
            }
        };

        const updateJsonOutput = () => {
            const newDbContent = { waifu: currentLinks };
            updatedJson.value = JSON.stringify(newDbContent, null, 2);
        };

        // --- Event Listeners ---
        testApiButton.addEventListener('click', async () => {
            imageResult.classList.remove('hidden');
            loadingText.classList.remove('hidden');
            loadingText.textContent = 'Lagi nyari gambar...';
            apiImage.classList.add('hidden');
            
            try {
                const response = await fetch('/api/waifu');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const imageBlob = await response.blob();
                const imageUrl = URL.createObjectURL(imageBlob);
                
                apiImage.src = imageUrl;
                loadingText.classList.add('hidden');
                apiImage.classList.remove('hidden');
            } catch (error) {
                console.error('Gagal tes API:', error);
                loadingText.textContent = 'Gagal mengambil gambar. Cek console.';
            }
        });

        addLinkButton.addEventListener('click', () => {
            const url = newImageUrl.value.trim();
            if (url) {
                if (currentLinks.includes(url)) {
                    alert('Link ini udah ada di database, bre.');
                    return;
                }
                currentLinks.unshift(url); // Taruh link baru di paling atas
                updateJsonOutput();
                newImageUrl.value = '';
                newImageUrl.focus();
                alert('Link berhasil ditambah! Jangan lupa copy dan update db.json di GitHub.');
            } else {
                alert('Isi dulu link gambarnya, bre.');
            }
        });

        copyButton.addEventListener('click', () => {
            updatedJson.select();
            document.execCommand('copy');
            copyButton.textContent = 'Copied!';
            setTimeout(() => { copyButton.textContent = 'Copy'; }, 2000);
        });

        // --- Inisialisasi ---
        document.addEventListener('DOMContentLoaded', () => {
            checkApiStatus();
            fetchInitialData();
        });
    </script>
</body>
</html>
