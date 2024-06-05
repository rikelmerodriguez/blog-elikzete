document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const userData = {
        name,
        email,
        age
    };

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }

        const result = await response.json();
        document.getElementById('message').textContent = result.message;
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        document.getElementById('message').textContent = 'Erro ao enviar dados. Tente novamente mais tarde.';
    }
});
