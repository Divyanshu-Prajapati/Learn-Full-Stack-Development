// import v from './test.js';
// console.log(v);
// import {study} from './test.js';
// console.log(study);
// import { helper } from './test.js';
// console.log(helper());


var h1=React.createElement('h1',null,'Hey today i im started react');
var h2= React.createElement('h2',null,'Hello ji kaise ho aap log');
var div=React.createElement('div',{id :'parent'},[h1,h2]);
var root= ReactDOM.createRoot(document.querySelector('#box'));
root.render(div);
