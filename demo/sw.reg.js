if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js', {'scope': '/'}).then(function(registration) {
    // Registration was successful
    console.log('Registered!');
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
    }).catch(function(err) {
    console.log(err);
    });
    });
  
    navigator.serviceWorker.ready.then(function(registration) {
      if (!registration.pushManager) {
        alert('No push notifications support.');
        return false;
      }
      //To subscribe `push notification` from push manager
      registration.pushManager.subscribe({
      userVisibleOnly: true //Always show notification when received
      })
      .then(function (subscription) {
      console.log('Subscribed.');
      })
      .catch(function (error) {
      console.log('Subscription error: ', error);
      });
    })
  
  } else {
    console.log('service worker is not supported');
    }