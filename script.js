
chrome.runtime.sendMessage({command: "GET_LOCATION"}, function(location) {
  console.log(location);
  // make request;

  chrome.runtime.sendMessage({command: "GET_FORECAST"}, function(forecast) {
    console.log(forecast)
  });
})

walkDOM(document.body);

// based on code from http://is.gd/mwZp7E
// walk the DOM, attempt to change text nodes
function walkDOM(node) {
  let child;
  let nextNode;

  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
    case Node.DOCUMENT_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
      child = node.firstChild
      while (child) {
        nextNode = child.nextSibling
        walkDOM(child);
        child = nextNode;
      }
      break;
    case Node.TEXT_NODE:
      replaceAll(node);
      break;
    default: break;
  }
}

// replace all instances of "no" or "know" with "snow"
function replaceAll(node) {
  const caseless = new RegExp(/\bno\b|\bknow\b/, "i");

  node.nodeValue = node.nodeValue.replace(/\bno\b/g, "snow")
    .replace(/\bknow\b/g, "snow")
    .replace(/\bNo\b/g, "Snow")
    .replace(/\bKnow\b/g, "Know")
    .replace(/\bNO\b/g, "SNOW")
    .replace(/\bKNOW\b/g, "KNOW")
    .replace(caseless, "snow");
}
