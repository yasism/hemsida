const searchForm= document.querySelector('form');
const searchResultDiv =  document.querySelector('search-result');
const containter =querySelector('containter');
let searchQuery= '';

searchForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  searchQuery = e.target.querySelector('input').value;
  console.log(searchQuery)
})
 