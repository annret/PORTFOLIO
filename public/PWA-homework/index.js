
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered", res))
            .catch(err => console.log("service worker not registered", err))
    })
}

let deferredPrompt;
let websiteinstalled = false;
let downloadButton = document.querySelector('#downloadButton');

window.addEventListener('promptBeforeDownload', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log("finished downloading");
});

downloadButton.addEventListener('answerPrompt', async () => {
    deferredPrompt.prompt()
    let result = await that.prompt.userChoice;
    if (result && result.outcome === 'accepted') {
        installed = true;
    }
});


function allowNotifications() {
    return new Promise(function (resolve, reject) {
      const answer =
        Notification.requestPermission(function (result) {
          resolve(result);
        });
      if (answer) {
        answer.then(resolve, reject);
      }
    })
      .then(function (answer) {
        if (answer !== 'allowed') {
          throw new Error('You blocked the notifications.');
        }
      });
  }
  function getSW() {
    return navigator.serviceWorker.getRegistration('../service-worker.js');
  }
  
  async function showNotificationText(i) {
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
  registration.showNotification(
    notificationTitle, 
    options
    );
}