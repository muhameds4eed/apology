function nextScreen(hideId, showId) {
    // Hide the current screen
    const current = document.getElementById(hideId);
    if (current) {
        current.classList.remove('active');
    }

    // Show the next screen
    const next = document.getElementById(showId);
    if (next) {
        next.classList.add('active');
    }
}

// Logic for the "No" button movement (optional interaction)
const noBtn = document.getElementById('btnNo');
if (noBtn) {
    noBtn.addEventListener('mouseover', function() {
        // Uncomment below to make the button run away!
        // const x = Math.random() * (window.innerWidth - 100);
        // const y = Math.random() * (window.innerHeight - 50);
        // noBtn.style.position = 'absolute'; 
        // noBtn.style.left = x + 'px'; 
        // noBtn.style.top = y + 'px';
    });
}