document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const usernameInput = document.getElementById('username');
    const userList = document.getElementById('userList');

    function loadUsers() {
        fetch('/users')
            .then(res => res.json())
            .then(users => {
                userList.innerHTML = '';
                for (const id in users) {
                    const user = users[id];
                    const div = document.createElement('div');
                    div.textContent = `ID: ${user.id}, Name: ${user.name}`;
                    userList.appendChild(div);
                }
            });
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = usernameInput.value.trim();
        if (!name) return;

        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name })
        })
        .then(() => {
            usernameInput.value = '';
            loadUsers();
        });
    });

    loadUsers();
});