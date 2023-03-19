export async function getAllRpgs() {
    const rpgs = await fetch('http://localhost:5000/user/rpg', {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
    });

    return rpgs;
}

export async function getRpgsByUser() {
    const rpgs = await fetch('http://localhost:5000/user/rpg', {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
    });

    return rpgs;
}