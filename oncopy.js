document.addEventListener('copy', onCopy)

function onCopy(e) {
    e.clipboardData.setData('text/plain', 'poopy pants');
    e.clipboardData.setData('text/html', '<b>poopy pants</b>');
    e.preventDefault();
}
