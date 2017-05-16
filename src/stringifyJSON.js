// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// const underScore = require ('./underscore')

var stringifyJSON = function(obj) {
  // your code goes here
  if ( typeof obj === 'number' ) {
    return number(obj);
  } else if ( obj === null ) {
    return nullToString(obj); 
  } else if ( typeof obj === 'boolean' ) {
    return booleanToString(obj);
  } else if ( typeof obj === 'string' ) {
    return stringToString(obj);
  } else if ( Array.isArray(obj) ) {
    return arrayToString(obj);
  } else if ( typeof obj === 'object' ) {
    return objectToString(obj);
  }
};


const number = function (num) {
  if ( typeof num === 'number') { 
    return num.toString(); 
  }
};

const nullToString = function (str) {
  if ( str === null ) {
    return 'null';
  }
};


const booleanToString = function (bool) {
  if ( bool === true ) {
    return 'true'; 
  } else {
    return 'false'; 
  }
};

const stringToString = function (str) {
  return '"' + str + '"';
}; 

const arrayToString = function (arr) {
  if ( arr.length === 0 ) {
    return '[]'; 
  }
  return '[' + arr.map( (ele) => stringifyJSON(ele)).join(',') + ']'; 
};


const objectToString = function (obj) {
  if ( Object.keys(obj).length === 0 ) {
    return '{}';
  } 
  
  let objKey = '';
  let resultArray = [];

  for ( let key in obj ) {
    if ( key  === 'undefined' || key === 'functions' ) {
      return '{}'; 
    } else {
      resultArray.push( stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  }
  return '{' + resultArray.join(',') + '}';
}; 
