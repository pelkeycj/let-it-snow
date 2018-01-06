walkDOM(document.body);

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
