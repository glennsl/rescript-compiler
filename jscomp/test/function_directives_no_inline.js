// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function testFnWithDirective(name) {
  'use server';
  return "Hello " + name;
}

let x = testFnWithDirective("test");

exports.testFnWithDirective = testFnWithDirective;
exports.x = x;
/* x Not a pure module */
