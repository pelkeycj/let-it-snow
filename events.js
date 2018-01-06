chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.command === "GET_LOCATION") {
      navigator.geolocation.getCurrentPosition (function (position) {
        sendResponse ({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      });
      return true;
    }

    else if (request.command === "GET_FORECAST") {

    }
  }
);
