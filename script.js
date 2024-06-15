// script.js
document.getElementById('startButton').addEventListener('click', function() {
    let messageContainer = document.getElementById('messageContainer');
    messaggi = ["mia", "sei bellissima", "ti amo per sempre", "ti amo", "sei la mia vita", "amore mio"];
    let starImages = [
        'images/star1.png',
        'images/star2.png',
        'images/star3.png',
        'images/star4.png',
        'images/star5.png',
        'images/star6.png',
        'images/star7.png',
        'images/star8.png',
        'images/star9.png'
    ];
    for (let i = 0; i < 10; i++) { // Generiamo 10 messaggi
        let message = document.createElement('div');
        message.className = 'message';
        let j = Math.floor(Math.random() * 6);

        message.textContent = messaggi[j];
        
        // Posizioniamo i messaggi casualmente
        let delay = Math.random() * 5; // Ritardo casuale
        let offset = (Math.random() * 100) - 50; // Posizione orizzontale casuale
        let size = (Math.random() * 20) + 20; // Dimensione casuale tra 10px e 30px
        let rotation = (Math.random() * 30) - 15; // Rotazione casuale tra -15 e 15 gradi

        message.style.animationDelay = delay + 's';
        message.style.left = `calc(55% + ${offset}vw)`; // Usa unità viewport width (vw) per coprire tutta la larghezza
        message.style.fontSize = `${size}px`; // Applica la dimensione casuale
        message.style.transform = `translateX(-50%) rotate(${rotation}deg)`; // Applica la rotazione casuale
        
        messageContainer.appendChild(message);
        
        // Rimuoviamo i messaggi alla fine dell'animazione
        setTimeout(() => {
            messageContainer.removeChild(message);
        }, (delay + 3) * 1000); // 3s è la durata dell'animazione

    
        // Creazione delle stelline
        let star = document.createElement('img');
        star.className = 'star';
        star.src = starImages[Math.floor(Math.random() * starImages.length)];

        let starDelay = Math.random() * 5; // Ritardo casuale
        let starOffset = (Math.random() * 100) - 50; // Posizione orizzontale casuale
        let starSize = (Math.random() * 50) + 20; // Dimensione casuale tra 20px e 70px
        let starRotation = (Math.random() * 30) - 15; // Rotazione casuale tra -15 e 15 gradi

        star.style.animationDelay = starDelay + 's';
        star.style.left = `calc(50% + ${starOffset}vw)`; // Usa unità viewport width (vw) per coprire tutta la larghezza
        star.style.width = `${starSize}px`; // Applica la dimensione casuale
        star.style.transform = `translateX(-50%) rotate(${starRotation}deg)`; // Applica la rotazione casuale

        messageContainer.appendChild(star);
        
        // Rimuoviamo le stelline alla fine dell'animazione
        setTimeout(() => {
            messageContainer.removeChild(star);
        }, (starDelay + 3) * 1000); // 3s è la durata dell'animazione
    }
});
