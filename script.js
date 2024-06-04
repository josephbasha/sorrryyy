document.getElementById('displayButton').addEventListener('click', function(event) {
    var container = document.getElementById('container');
    var button = event.target;

    button.classList.add('hidden');

    // Show decorations
    var decorations = document.querySelectorAll('.hidden');
    decorations.forEach(function(decoration) {
        decoration.classList.remove('hidden');
    });

    // Play sound
    var audio = document.getElementById('audio');
    audio.play();

    // Create image element
    var imageDiv = document.createElement('div');
    imageDiv.id = 'imageDiv';
    container.appendChild(imageDiv);

    // Animate image
    setTimeout(function() {
        imageDiv.classList.add('rotate');
    }, 1000);

    setInterval(function() {
        var message = document.createElement('div');
        message.className = 'message';
        message.textContent = randomMessage();
        message.style.left = Math.random() * window.innerWidth + 'px';
        message.style.top = Math.random() * window.innerHeight + 'px';
        message.style.color = getRandomDarkColor(); // Use darker color
        message.style.fontSize = Math.floor(Math.random() * 30 + 20) + 'px'; // Random font size

        container.appendChild(message);

        setTimeout(function() {
            container.removeChild(message);
        }, 2000); // Decrease timeout to spawn words more frequently
    }, 100); // Decrease interval to spawn words more frequently
});

function randomMessage() {
    var messages = [
        'I LOVE YOU', // English
        'بحبك', // Arabic
        'Je t\'aime', // French
        'Ich liebe dich', // German
        'Seni seviyorum', // Turkish
        '愛してる', // Japanese
        'Eu te amo', // Portuguese
        'Te quiero', // Spanish
        'Ti amo', // Italian
        'Я тебя люблю', // Russian
        '我爱你', // Mandarin
        '사랑해' // Korean
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomDarkColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Darken the color
    color = darkenColor(color, 20);
    return color;
}

function darkenColor(color, percent) {
    // Darken the color by the specified percentage
    var num = parseInt(color.slice(1), 16);
    var amt = Math.round(2.55 * percent);
    var R = (num >> 16) - amt;
    var G = (num >> 8 & 0x00FF) - amt;
    var B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1);
}

function getRandomColor() {
    // Get random color, you can customize it to make it darker
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
