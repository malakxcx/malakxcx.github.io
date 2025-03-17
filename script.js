document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const messages = document.getElementById('messages');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            const newMessage = document.createElement('div');
            newMessage.textContent = `Du: ${message}`;
            messages.appendChild(newMessage);
            chatInput.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    });

    const gallery = document.querySelector('.gallery');
    const catInfo = document.getElementById('cat-info');

    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const info = e.target.getAttribute('data-info');
            catInfo.textContent = info;
            catInfo.style.display = 'block';
        }
    });

    function searchCats() {
        let input = document.getElementById('searchBar').value.toLowerCase();
        let images = document.querySelectorAll('.gallery img');

        images.forEach(img => {
            let breed = img.alt.toLowerCase(); // Get the breed name from alt attribute
            if (breed.includes(input)) {
                img.style.display = "block"; // Show matching images
            } else {
                img.style.display = "none"; // Hide non-matching images
            }
        });
    }

    document.getElementById('searchBar').addEventListener('input', searchCats);
});
