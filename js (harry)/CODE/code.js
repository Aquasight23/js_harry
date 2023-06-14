// 1. Window Object Properties:-
// The window object properties are the variables created inside the window object. We can access the properties of window object by using the syntax:

// window.propertyname
// where property name is the name of the property.

// The following are the most popular window object properties:

// Properties

// Explanation

// width: It specifies the initial width of the browser window.

// height: It specifies the initial height of the browser window.

// innerWidth: It specifies the initial width of the window content area

// innerHeight: It specifies the initial height of the window content area

// outerWidth: It specifies the initial width of the navigator window

// outerHeight: It specifies the initial height of the navigator window

// menubar: It specifies whether the window should contain the browser menubar

// location: It specifies whether the window should contain the browser location/URL box

// scrollbars: It hides or shows browser horizontal/vertical scrollbars

// top: Specified the number of pixels from the top of the screen to the new window

 
// Window Object Methods:-
// The window object methods are the functions that are created inside the Window Object. These methods are used to perform various actions on the
// browser window, such as how it displays a message or gets input from the user.

// Following are the some of the most commonly used window object methods:

// Method

// Description

// alert(): It will display an alert box with a message on the screen

// blur(): It will remove focus from the current window

// close(): It will close the current window

// confirm(): It will display a dialog box with a message on the screen

// focus(): It will set the focus to the current window

// moveTo(): It will move a window to the specified position

// open(): It will open a new browser window

// print(): It will print the content of the current window

// prompt(): It will display a dialog box that prompts the user for input

// resizeBy(): It will resize the window by the specified pixels

// resizeTo(): It will resize the window to the specified height and width

// scrollBy(): It will scroll the document by the specified number of pixels

// scrollTo(): It will scroll the document to the specified coordinates

// stop():It will stop the window from loading





// 2. DOM=Document Object Model

// DOM Properties:-
// With the Document Object Model (DOM), we can create and build documents, add, modify, or delete elements and content. Anything found in an HTML 
// document can be accessed, changed, deleted, or added using the Document Object Model, with a few exceptions. 
// The syntax for accessing the DOM properties is:

// document.property_name
//  Here are some of the most common properties of the document object model.

// Property

// Description

// document.anchors: It will return all <a> elements that have a name attribute

// document.baseURI: It will return the absolute base URI of the document

// document.body: It will return the <body> element

// document.cookie: It will return the document's cookie

// document.doctype: It will return the document's doctype

// document.documentElement: It will return the <html> element

// document.documentMode: It will return the mode used by the browser

// document.documentURI: It will return the URI of the document

// document.embeds: It will return all HTML <embed> elements

// document.forms: It will return all HTML <form> elements

// document.head: It will return the HTML <head> element

// document.images: It will return all HTML <img> elements

// document.implementation: It will return the DOM implementation

// document.links: It will return all HTML <area> and <a> elements that have a href attribute

// document.scripts: It will return all HTML <script> elements

// document.title: It will return the <title> element

// document.URL: It will return the complete URL of the document

// Note that: The DOM is a representation of the various components of the browser and the current Web document that can be accessed or manipulated using JavaScript.



// console.log('Welcome to tut 12.js');
// let a = document;
// a = document.all;
// a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//   console.log(element);
// })
// a = document.links[0];
// //use document.images and document.scripts and print the list of images and scripts on an html page
// console.log(a);






// 3. Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// codewithharry.com 
// javascript





// 4. HTML element selector

// console.log('Welcome to tutorial 14');
// /*
// element selectors:
// 1. Single element selector
// 2. Multi element selector

// */

// // 1. Single element selector
// let element = document.getElementById('myfirst');
// // element = element.className;
// // element = element.childNodes;
// // element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'Harry is a good boy';
// element.innerHTML = '<b>Harry is a good boy</b>';
// // console.log(element.innerText);


// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = 'green';
// console.log(sel)

// // 2. Multi element selector
// let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
// console.log(elems)

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'blue'; 
// }
// // Array.from(elems).forEach(element => {
// //     console.log(element);
// //    element.style.color = 'blue'; 
// // });
// // console.log(elems[0].getElementsByClassName('child'))





// 5. console.log('Welcome to tutorial 15');

// let cont = document.querySelector('.no');
// cont = document.querySelector('.container');
// let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[1].nodeType;
// // console.log(nodeName)
// // console.log(nodeType)
// // Node types
// // 1. Element
// // 2. Attribute
// // 3. Text Node
// // 8. Comment
// // 9. document
// // 10. docType

// // console.log(cont.childNodes);
// // console.log(cont.children);

// let container = document.querySelector('div.container');

// // console.log(container.children[1].children[0].children);

// // console.log(container.firstChild);
// // console.log(container.firstElementChild);

// // console.log(container.lastChild);
// // console.log(container.lastElementChild);
// // console.log(container.children);
// // console.log(container.childElementCount); // Count of child elements

// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);





// 6. console.log('this is tut 16');
// let element = document.createElement('li');
// let text = document.createTextNode('I am a text node');
// element.appendChild(text)

// // Add a class name to the li element
// element.className = 'childul';
// element.id = 'createdLi';
// element.setAttribute('title', 'mytitle');
// // element.innerText = '<b>Hello this is created by harry</b>';
// // element.innerHTML = '<b>Hello this is created by harry</b>';

// let ul = document.querySelector('ul.this');
// ul.appendChild(element);
// // console.log(ul)
// // console.log(element)

// let elem2 = document.createElement('h3');
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode('This is a created node for elem2');
// elem2.appendChild(tnode);

// element.replaceWith(elem2);
// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));
// myul.removeChild(document.getElementById('lui'));
// let pr = elem2.hasAttribute('href');
// elem2.removeAttribute('id');
// elem2.setAttribute('title', 'myelem2title');
// console.log(elem2, pr);





// 7. console.log("This is tutorial 17 on events");

// document.getElementById("heading").addEventListener("click", function(e) {
//   let variable;
//   console.log("You have clicked the heading");
//   variable = e.target;
//   variable = e.target.className;
//   variable = Array.from(e.target.classList);

//   variable = e.target.id;
//   variable = e.offsetX;
//   variable = e.offsetY;
//   variable = e.clientX;
//   variable = e.clientY;
//   console.log(variable);
//   // location.href = '//codewithharry.com'
// });





// 8. console.log('This is tut 18');

// // let btn = document.getElementById('btn');
// // btn.addEventListener('click', func1);
// // // btn.addEventListener('mousedown', func3);
// // btn.addEventListener('dblclick', func2);

// // function func1(e) {
// //     console.log("Thanks", e);
// //     e.preventDefault();
// // }

// // function func2(e) {
// //     console.log("Thanks its a double click", e);
// //     e.preventDefault();
// // }

// // function func3(e) {
// //     console.log("Thanks its a mouse down ", e);
// //     e.preventDefault();
// // }
// // document.querySelector('.no').addEventListener('mouseenter', function(){


// //     console.log('You entered no')
// // })

// // document.querySelector('.no').addEventListener('mouseleave', function(){
// //     console.log('You exited no')
// // })

// document.querySelector('.container').addEventListener('mousemove', function(e){
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
//     console.log('You triggered mouse move event')
// })





// 9. Exercise 1

// // You have to create a variable, which takes a string that contains the text, which is a link you are interested in. 
// // Your task is to fetch all the links from a given page which contains this text.


// let str = "python";
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element) {
//   href = element.href;
//   if (href.includes(str)) {
//     console.log(href);
//   }
// });





// 10. localstorage and sessionStorage

// console.log('This is tut 20');
// let impArray = ['adrak', 'pyaz', 'bhindi'];

// // // Add a key-value pair inside local Storage
// // localStorage.setItem('Name', 'Harry');
// // localStorage.setItem('Name2', 'Rohan');
// // localStorage.setItem('Sabzi', JSON.stringify(impArray));

// // Clears the entire local storage
// // localStorage.clear();

// // Clear a particular key-value pair
// // localStorage.removeItem('Name2');

// // Retrieve an item from the local Storage
// let name = localStorage.getItem('Name');
// name = JSON.parse(localStorage.getItem('Sabzi'));
// console.log(name)

// // sessionStorage.setItem('sessionName', 'sHarry');
// // sessionStorage.setItem('sessionName2', 'sRohan');
// // sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));




