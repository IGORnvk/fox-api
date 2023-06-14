const foxButton = document.getElementById('get-fox');
const foxImage = document.getElementById('fox');

foxButton.addEventListener('click', async function () {
    const source = await getData("https://randomfox.ca/floof/");
    foxImage.src = source.image;
    foxImage.style.removeProperty('border-style');
});

async function getData(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.warn("warning", err);
    }
}
