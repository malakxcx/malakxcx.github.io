document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const catInfo = document.getElementById('cat-info');

    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const info = e.target.getAttribute('data-info');
            catInfo.textContent = info;
            catInfo.style.display = 'block';
            catInfo.style.width = '80%'; // Ensure it spans the full width
            catInfo.style.position = 'fixed'; // Fix it at the bottom
            catInfo.style.bottom = '10px'; // Keep some spacing from the bottom
            catInfo.style.left = '1'; // Center it horizontally
            catInfo.style.backgroundColor = 'white'; // Background for visibility
            catInfo.style.border = '1px solid #ccc';
            catInfo.style.zIndex = '1000'; // Keep it above other elements
            catInfo.style.textAlign = 'center';
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
