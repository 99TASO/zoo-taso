function calculatePrice() {
    const age = document.getElementById('age').value;
    let price;

    if (age >= 0 && age <= 3) {
        price = 'Free';
    } else if (age > 3 && age <= 12) {
        price = 'R100';
    } else if (age > 12 && age <= 18) {
        price = 'R180';
    } else if (age > 18 && age <= 65) {
        price = 'R200';
    } else if (age > 65) {
        price = 'Free';
    } else {
        price = 'Invalid age';
    }

    document.getElementById('result').innerText = `Entrance Price: ${price}`;
}
