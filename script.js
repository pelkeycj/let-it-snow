
const REPLACEMENTS {
  "no": "snow",
  "know": "snow",
  "No": "Snow",
  "Know": "Snow",
  "NO": "SNOW",
  "KNOW": "SNOW",
}

$(document).ready(function() {
  const originalBodyHTML = document.body.outerHTML;

  dropBodyChildren(document)
  const snowyHTMLString = HTMLtoSnowString(document.body);
  const snowyHTML = $.parseHTML(snowyHTMLString);
  addBodyChildren(document, snowyHTML);
});

function dropBodyChildren(doc) {
  while (doc.body.firstChild) {
    doc.body.removeChild(doc.body.firstChild);
  }
}

// body must be html
function addBodyChildren(doc, children) {
  for (let i = 0; i < children.length; i++) {
    document.body.appendChild(children[i]);
  }
}


function HTMLtoSnowString(base_node) {
  let html = "";
  let node = base_node.firstChild;
  while (node) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
      html += node.outerHTML;
      break;
      case Node.TEXT_NODE:
      html += replace_all(node.nodeValue);
      break;
      case Node.COMMENT_NODE:
      html += '<!--' + node.nodeValue + '-->';
      break;
      case Node.DOCUMENT_TYPE_NODE:
      // (X)HTML documents are identified by public identifiers
      html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
      break;
    }
    node = node.nextSibling;
  }
}

// replace all instances of "no" or "know" with "snow"
function replace_all(text) {
  text.split(" ").map(function (word) {
    if (word.toUpperCase() === "NO" || word.toUpperCase() === "KNOW") {
      if (word in REPLACEMENTS) {
        return REPLACEMENTS[word];
      }
      return "snow";
      //return matchCase(word, "snow");
    }
    return word
  }).join(" ");
}

function isUpperCase(text) {
  return (text.toUpperCase() === text
}

function matchCase(word, pattern) {
  let result = ''
  if (pattern.length < word.length) { return pattern }

  for (let i = 0; i < word.length; i++) {
    const w = word.charAt(i);
    const p = pattern.charAt(i);

    if isUpperCase(w) { result += p.toUpperCase() }
    else { result += p.toLowerCase() }
  }

  if (result.length < pattern.length) {
    result += pattern.slice(result.length - 1);
  }
  return result;
}
