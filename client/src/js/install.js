const butInstall = document.getElementById('buttonInstall');
const content = document.getElementById("content");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed"
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    content.textContent = "Succesfully Installed!";
    console.log("app installed", event);
});
