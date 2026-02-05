function makaleleriGetir(filtre) {
    const liste = document.getElementById('makale-listesi');
    if (!liste) return;
    liste.innerHTML = "";

    makaleVerisi.forEach(m => {
        if (filtre === 'hepsi' || m.kategori === filtre) {
            liste.innerHTML += `
                <div class="card">
                    <small style="color:var(--altin); font-family:'Cinzel'">${m.kategori.toUpperCase()}</small>
                    <h3 style="font-family:'Cinzel'">${m.baslik}</h3>
                    <p>${m.ozet}</p>
                    <a href="makale-detay.html?id=${m.id}" class="btn-oku">Okumaya Başla</a>
                </div>
            `;
        }
    });
}

// Detay sayfası kontrolü
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes('makale-detay.html')) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const makale = makaleVerisi.find(x => x.id === id);

        if (makale) {
            document.getElementById('m-baslik').innerText = makale.baslik;
            document.getElementById('m-icerik').innerText = makale.icerik;
            document.getElementById('m-meta').innerText = `${makale.tarih} | Kategori: ${makale.kategori}`;
        }
    }

});

function makaleleriGetir(filtre) {
    const liste = document.getElementById('makale-listesi');
    if (!liste) return;
    liste.innerHTML = "";

    makaleVerisi.forEach(m => {
        if (filtre === 'hepsi' || m.kategori === filtre) {
            liste.innerHTML += `
                <div class="card">
                    <small style="color:var(--altin); font-family:'Cinzel'">${m.kategori.replace('-',' ').toUpperCase()}</small>
                    <h3 style="font-family:'Cinzel'; margin: 10px 0;">${m.baslik}</h3>
                    <p>${m.ozet}</p>
                    <a href="makale-detay.html?id=${m.id}" class="btn-oku">DEVAMINI OKU</a>
                </div>
            `;
        }
    });
}
