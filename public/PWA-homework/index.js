
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("./serviceWorker.js")
            .then(res => console.log("service worker registered", res))
            .catch(err => console.log("service worker not registered", err))
    })
}


/* download */
let deferredPrompt;
let downloadButton = document.querySelector('#downloadButton');
let websiteinstalled = false;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  downloadButton.classList.remove("button-grey");
  console.log("before install prompt");
});

downloadButton.addEventListener('click', async () => {
  deferredPrompt.prompt();
  let result = await that.prompt.userChoice;
  if (result && result.outcome === 'accepted') {
    installed = true;
  }  
  console.log("click");
});

window.addEventListener('appinstalled', async function (e) {
  downloadButton.classList.remove("button-pink");
  downloadButton.classList.add("button-grey");  
  console.log("app installed");
});


/* allow notifications */
let notificationButton = document.querySelector('#notificationButton');

window.onload = () => {
  if (Notification.permission === 'granted') {
    notificationButton.classList.remove('button-pink');
    notificationButton.classList.add("button-grey");
  }
  else if(Notification.permission === 'denied'){
    notificationButton.classList.add('button-grey');    
    notificationButton.classList.remove('button-pink');
  }
  else {
    notificationButton.classList.remove('button-grey');    
    notificationButton.classList.add('button-pink');
  }
};


function allowNotifications() {
    return new Promise(function (resolve, reject) {
      const answer =
        Notification.requestPermission(function (result) {
          resolve(result);
        });
      if (answer) {
        answer.then(resolve, reject);
      }
      
      notificationButton.classList.remove("button-pink");
      notificationButton.classList.add("button-grey");  

    })
      .then(function (answer) {
        if (answer !== 'granted') {
          throw new Error('We weren\'t granted permission.');
        }
      });
  }
  function getSW() {
    return navigator.serviceWorker.getRegistration('../serviceWorker.js');
  }
  
  async function showNotification(i) {
    let notificationTitle
    let options

    if (i == 1) {
      notificationTitle = 'Hi!';
      options = {
        image: 'notification-pic-1.jpg',
        body: 'I hope you are having a wonderful day!',
        tag: 'notification-hi',
        requireInteraction: true
      };
    }
    else if (i == 2) {
      notificationTitle = 'bad joke incoming...';
      options = {
        image: 'notification-pic-2.jpg',
        body: 'What do you call bears with no ears? - B.',
        tag: 'notification-logo',
        requireInteraction: true
      };
    }
  
  const registration = await getSW();
  console.log(registration)
  registration.showNotification(notificationTitle, options);
}