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
});
