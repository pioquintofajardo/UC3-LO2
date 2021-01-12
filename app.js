// 
// var books = document.querySelectorAll('#book-list li . name');

// Array.from(books).forEach(function(book){
//     book.textContent +='(book title)';
// });

// const booklist = document.querySelector('#book-list');
// //bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';

// //const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:',banner.nodeType);
// console.log('#page-banner node Name is:',banner.nodeName);
// console.log('#page-banner has child nodes:',banner.hasChildNodes());

// const cloneBanner = banner.cloneNode(true);
// console.log(cloneBanner);

// //const bookList = document.querySelector('#book-list');
// console.log('the parent element is:', bookList.parentElement.parentElement);

// console.log(bookList.children);

const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next  element sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous  element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML +='<br/>Too cool for everyone else!';