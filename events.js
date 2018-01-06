chrome.runtime.onMessage.addListener {
  function (request, sender, sendResponse) {
    console.log('somewhere');
    if (request.command == "GET_LOCATION") {
      navigator.geolocation.getCurrentPosition (function (position) {
        console.log('position', position);
        sendResponse ({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      });
      console.log('frick')
      return true;
    }
    return false;
  }
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("wow");
    if (request.greeting == "hello") {
      sendResponse({farewell: "goodbye"});
    }
  }
);
