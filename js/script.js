document.addEventListener('DOMContentLoaded', () => {
    const spacecraftsContainer = document.getElementById('spacecrafts-container');

    fetch('https://isro.vercel.app/api/spacecrafts')
        .then(response => response.json())
        .then(data => {
            const spacecrafts = data.spacecrafts;
            spacecrafts.forEach(spacecraft => {
                const spacecraftElement = document.createElement('div');
                spacecraftElement.classList.add('spacecraft');

                const spacecraftName = document.createElement('h2');
                spacecraftName.textContent = spacecraft.name;

                spacecraftElement.appendChild(spacecraftName);

                spacecraftsContainer.appendChild(spacecraftElement);
            });
        })
        .catch(error => {
            console.error('Error fetching spacecrafts:', error);
            spacecraftsContainer.textContent = 'Failed to load spacecrafts.';
        });
});