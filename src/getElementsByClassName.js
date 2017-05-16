// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let arr = flattenerArray(document.body);
  return _.filter( arr, (ele) => (ele.className || '').indexOf(className) !== -1 );
};



const visitNodes = function(node, callback) {
  if (node.childNodes) {
    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      visitNodes(children[i], callback);
    }
  }
  callback(node);
};


const flattenerArray = function (nodes) {
  let result = [];
  visitNodes(nodes, function (item) {
    result.unshift(item);
  });
  return result;
};

