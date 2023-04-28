const tabLinks = document.querySelectorAll('.tab-links')
const tabContents = document.querySelectorAll('.tab-content')
const sideMenuEl = document.getElementById('sideMenu')
const dateEl = document.querySelector('.datetime')

const date = new Date().getFullYear();
dateEl.innerText = date;

function openTab(tabName){
   tabLinks.forEach(tab => {
      tab.classList.remove("active-link")
   })
   tabContents.forEach(content => {
      content.classList.remove("active-tab")
   })
   event.currentTarget.classList.add('active-link');
   document.getElementById(tabName).classList.add('active-tab')
   
}

function openmenu() {
   sideMenuEl.style.right = '0';
}
function closemenu() {
   sideMenuEl.style.right = '-200px';
}

//const scriptURL = 'https://script.google.com/macros/s/AKfycbxzCuVxT2XUhsySgcb3pXGA5ZJeINUUNuyAEXNnKgwKZhVjRZ82zFpu5a6sO3J6uo91/exec'
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMpHaXeqAnkOoJzmB8xtOO_pQCC3L3TRYcLU7VfcWe3PNc8ylFZWcNY5kitC8USIfQ/exec'
const form = document.forms['submit-to-google-sheet']
const msgEl = document.getElementById('msg')
const msgErrorEl = document.getElementById('msgerr')
const msgAlertEl = document.querySelector('.msg-alert')
const buttonEl = document.querySelector('#button_form')

form.addEventListener('submit', e => {
   e.preventDefault()
   msgAlertEl.classList.remove('show')
   msgEl.innerText = 'Submitting Message...'
   buttonEl.style.backgroundColor = 'gray';
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      msgEl.innerText = ''
      msgAlertEl.classList.remove('show')
      msgEl.innerText = 'Success!, Message sent successfully'
      setTimeout(() => {
         msgAlertEl.classList.add('show')
         msgEl.innerText = ''
      }, 3000);
      buttonEl.style.backgroundColor = '#ff004f'
      form.reset();
   })
      .catch(error => {
      msgEl.innerText = ''
      console.log(error)
      msgAlertEl.classList.remove('show')
      msgErrorEl.innerText = 'Error!, Unable to send message'
      setTimeout(() => {
         msgAlertEl.classList.add('show')
         msgErrorEl.innerText = ''
      }, 3000);
      buttonEl.style.backgroundColor = '#ff004f'
      form.reset();
   })
})