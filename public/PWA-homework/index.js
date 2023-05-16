
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered", res))
            .catch(err => console.log("service worker not registered", err))
    })
}


let deferredPrompt;
let installbutton = document.querySelector('#installbutton');
let websiteinstalled = false;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beofreinstallprmt')
    e.preventDefault();
    deferredPrompt = e;
    installbutton.classList.remove("install-btn-hide");
    console.log("Installable");
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installbutton.classList.remove("hide_button");
    console.log("Installable");
  });

installbutton.addEventListener('click', async () => {
    console.log('y')
    deferredPrompt.prompt()
    let result = await that.prompt.userChoice;
    if (result && result.outcome === 'accepted') {
        installed = true;
        installButton.style.display = "none";
    }
});

window.addEventListener('appinstalled', async function (e) {
    installButton.style.display = "none";
    console.log("App installed");
});
if (websiteinstalled == true) {
    installButton.style.display = "none";
}
