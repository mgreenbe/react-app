let root = document.getElementById("root");
console.log(root.attributes);

objectType = obj =>
    obj.__proto__[Object.getOwnPropertySymbols(obj.__proto__)[0]];

arrayFromCollection = coll =>
    Array(coll.length).fill(0).map((x,i) => coll.item(i));

const htmlElement = document.createElement('s').__proto__
const nodeList = document.childNodes.__proto__;
const textNode = document.createTextNode("").__proto__;

const parse = function(dom, vdom) {
  const pc = prototypeChain(dom);
  if (pc.includes(htmlElement)) {
    console.log(dom.nodeName);
  }
  if (pc.includes(nodeList)) {
    console.log(dom);
  }
  if (pc.includes(textNode)) {
    console.log("text node")
  }
}

const prototypeChain = function(obj) {
  if (Array.isArray(obj)) {
    let proto = obj[obj.length - 1].__proto__;
    if (proto === null) {
      return [...obj, proto];
    } else {
      return [...obj, ...prototypeChain([proto])];
    }
  } else {
    let proto = obj.__proto__;
    return (proto === null) ? [null] : prototypeChain([proto]);
  }
} 


let t = document.createTextNode("Hi, mom!");
console.log(prototypeChain(t));
let h = root.childNodes;
console.log(prototypeChain(h).find( x => x == htmlElement || x == textNode || x == nodeList ));
parse(t);