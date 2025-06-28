const gifs = [
    "Funny Or Die 80S GIF.gif",
    "Running Water Quill GIF by Reuben Armstrong.gif",
    "Art Pixel GIF.gif", // Placeholder, add your own
    "high quality its been pointless GIF.gif",   // Placeholder, add your own
    "pointless i dont care GIF.gif", // Placeholder, add your own
    "button GIF.gif",   // Placeholder, add your own
    "Point GIF by Pixel Bandits.gif",   // Placeholder, add your own
    "happy stan marsh GIF by South Park.gif",   // Placeholder, add your own
    "Mr P GIF by @ICT_MrP.gif",   // Placeholder, add your own
    "김유정 GIF by Netflix Korea.gif",   // Placeholder, add your own
    "Bored Whatever You Say GIF.gif",   // Placeholder, add your own
    "bored role playing GIF by Hyper RPG.gif",   // Placeholder, add your own
    "Utopia GIF by Amazon Prime Video.gif",   // Placeholder, add your own
    "Eugene Lee Yang Therapy GIF by BuzzFeed.gif",   // Placeholder, add your own
    "Crypto Ape GIF by Bifrost Wallet.gif",   // Placeholder, add your own
    "episode 2 news GIF.gif",   // Placeholder, add your own
    "Nainainai GIF by ATARASHII GAKKO!.gif",   // Placeholder, add your own
    

];


function trollBuy() {
    alert("You clicked BUY! Just kidding, you thought this would do something? 😜 Try again! MatrixMischief!");
    window.open('https://photon-sol.tensordev.io/', '_blank');
}

async function connectWallet() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            alert(`Phantom wallet connected! Address: ${response.publicKey.toString()}. Ready to waste SOL on $Pointless? 😜 MatrixMadness!`);
        } catch (error) {
            alert('Connection failed. Maybe Phantom thinks this is too pointless! 😅 MatrixMalfunction!');
            console.error('Phantom connection error:', error);
        }
    } else {
        alert('Install Phantom wallet to join the pointless party! Get it at phantom.app - MatrixMuddle!');
        window.open('https://phantom.app/', '_blank');
    }
}

function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('current-time').textContent = `It’s currently ${utcTime} UTC – the perfect time for pointless things! MatrixMoment!`;
}

function loadGifsOnScroll() {
    const storyContainer = document.getElementById('story-container');
    const leftGifs = document.querySelector('.left-gifs');
    const rightGifs = document.querySelector('.right-gifs');
    const storyText = document.querySelector('.story-text');
    let lastLeftIndex = 0;
    let lastRightIndex = 0;

    function addGif(column, index) {
        if (index >= gifs.length) return; // Stop at end of GIF array
        const img = document.createElement('img');
        img.src = gifs[index];
        img.alt = `Funny GIF ${index + 1}`;
        img.className = 'story-gif';
        column.appendChild(img);
        // Ensure GIFs don't exceed container height
        if (column.scrollHeight > storyContainer.clientHeight) {
            column.removeChild(img); // Remove if it overflows
            return;
        }
    }

    function checkScroll() {
        const rect = storyText.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
            if (lastLeftIndex < gifs.length) {
                addGif(leftGifs, lastLeftIndex);
                lastLeftIndex++;
            }
            if (lastRightIndex < gifs.length) {
                addGif(rightGifs, lastRightIndex);
                lastRightIndex++;
            }
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
}

// Update time and load GIFs on page load
updateTime();
setInterval(updateTime, 60000);
loadGifsOnScroll();

setInterval(() => {
    const vibes = Math.floor(Math.random() * 1000);
    document.getElementById('vibes').textContent = `${vibes}/10`;
    document.getElementById('confusion').textContent = vibes > 500 ? 'Maximum' : 'Moderate';
}, 5000);