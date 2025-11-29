const replacementMap = {
  'Man': 'Lark',
  'man': 'lark',
  'Gent': 'Lark',
  'gent': 'lark',
  'Woman': 'Robin',
  'woman': 'robin',
  'Lady': 'Robin',
  'lady': 'robin',
  'Men': 'Larks',
  'men': 'larks',
  'Gents': 'Larks',
  'gents': 'larks',
  'Women': 'Robins',
  'women': 'robins',
  'Ladies': 'Robins',
  'ladies': 'robins',
}

const pattern = new RegExp(`\\b(${Object.keys(replacementMap).join('|')})\\b`, 'g');

const replaceText = (node) => {
  if (node.nodeType === Node.TEXT_NODE) { // text node
    node.textContent = node.textContent.replace(pattern, (matched) => replacementMap[matched]);
  } else { // container node
    node.childNodes.forEach(replaceText);
  }
};

replaceText(document.body);
