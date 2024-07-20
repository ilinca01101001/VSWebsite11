async function fetchConnectedHeadsets() {
    try {
        const response = await fetch('http://localhost:5000/connected_headsets');
        const data = await response.json();
        document.getElementById('headsets').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching headsets:', error);
        document.getElementById('headsets').innerText = 'Error loading headsets.';
    }
}

async function spawnActor() {
    try {
        const response = await fetch('http://localhost:5000/spawn_actor', {
            method: 'POST'
        });
        if (response.ok) {
            console.log('Actor spawn request successful');
        } else {
            console.error('Error spawning actor:', response.statusText);
        }
    } catch (error) {
        console.error('Error spawning actor:', error);
    }
}

// Fetch connected headsets on page load
document.addEventListener('DOMContentLoaded', fetchConnectedHeadsets);
