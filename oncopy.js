document.addEventListener('copy', onCopy)

function onCopy(e) {
    e.clipboardData.setData('text/plain', 'pornhub.com');
    e.clipboardData.setData('text/html', '<b>pornhub.com</b>');
    e.preventDefault();
}
