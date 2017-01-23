let parser = new DOMParser();
let str = `<div>
  <BlaH>
    Blah!
  </BlaH>
  <a id="a" className="big">
    <b id="b">
      hey!
    </b>
    <CC>
      yo!
    </CC>
  </a>
</div>`;


let dom = parser.parseFromString(str, 'text/xml');

const nodeTypes = {
  1: 'ELEMENT_NODE',
  2: 'ATTRIBUTE_NODE',
  3: 'TEXT_NODE',
  4: 'CDATA_SECTION_NODE',
  5: 'ENTITY_REFERENCE_NODE',
  6: 'ENTITY_NODE',
  7: 'PROCESSING_INSTRUCTION_NODE',
  8: 'COMMENT_NODE',
  9: 'DOCUMENT_NODE',
  10: 'DOCUMENT_TYPE_NODE',
  11: 'DOCUMENT_FRAGMENT_NODE',
  12: 'NOTATION_NODE',
}


const nodeListToArray = function(nodeList) {
  try {
    if (!(nodeList instanceof NodeList)) {
      throw new TypeError('Expecting instance of NodeList.');
    }
  }
  catch(e) {
    console.error(e);
  }
  const arr = [];
  nodeList.forEach(x => arr.push(x));
  return arr;
}

const isWhitespace = node => !(nodeTypes[node.nodeType] == 'TEXT_NODE' && node.textContent.trim() == '')


let xml2json = function(node) {

  try {
    if (arguments.length == 0) {
      throw new TypeError('Not enough arguments. You must pass a DOM node.');
    } 
    else if (!(node instanceof Element.__proto__)) {
      throw new TypeError('Argument must be a DOM node.');
    }
  }
  catch(e) {
    console.error(e);
  }

  switch (nodeTypes[node.nodeType]) {
    case ('ELEMENT_NODE'):
      const obj = {type: node.nodeName};
      if (node.attributes.length > 0) {
        const props = {};
        let attr;
        for (i = 0; i < node.attributes.length; i++) {
          attr = node.attributes.item(i);
          props[attr.name] = attr.value;
        }
        obj.props = props;
      }
      obj.children = nodeListToArray(node.childNodes).filter(isWhitespace).map(child => xml2json(child))
      return obj;
    case ('DOCUMENT_NODE'):
      return {
        type: node.nodeName,
        children: nodeListToArray(node.childNodes).filter(isWhitespace).map(child => xml2json(child))
      }
    case ('TEXT_NODE'):
      return node.textContent.trim();
    default:
  }
}

let obj = xml2json(dom);
console.log(JSON.stringify(obj, null, 2));
