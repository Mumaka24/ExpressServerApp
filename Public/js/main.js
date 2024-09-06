const output = document.querySelector('#output');
const button = document.querySelector('#get-names-btn');
const form = document.querySelector('#add-names-form');

// Get and show names
async function showNames() {
    try {
        const res = await fetch('http://localhost:8000/api/names');
        if (!res.ok) {
            throw new Error('Failed to fetchnames');
        }

        const names = await res.json();
        output.innerHTML = '';

        names.forEach((name) => {
            const nametEl = document.createElement('div');
            nameEl.textContent = name.title;
            output.appendChild(nameEl);
        })
    } catch (error) {
        console.log('Error fetching names: ', error);
    }
}

//Submit new name
async function addName(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('tittle');

    try {
        const res = await fetch('http://localhost:8000/api/names', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title })
        })

        if (!res.ok) {
            throw new Error('Failed to add name');
        }

        const newName = await res.json();

        const NameEl = document.createElement('div');
        NameEl.textContent = newName.title;
        output.appendChild(NameEl);
        showNames();
    } catch (error) {
        console.error('Error adding name');
    }
}

// Event listners
button.addEventListener('click', showNames);
form.addEventListener('submit', addName);

