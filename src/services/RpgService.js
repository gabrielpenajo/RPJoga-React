export async function getAllRpgs() {
    const rpgs = await fetch('http://localhost:5000/rpg/', {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
    });

    return rpgs;
}