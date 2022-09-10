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

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzCuVxT2XUhsySgcb3pXGA5ZJeINUUNuyAEXNnKgwKZhVjRZ82zFpu5a6sO3J6uo91/exec'
const form = document.forms['submit-to-google-sheet']
const msgEl = document.getElementById('msg')
const msgErrorEl = document.getElementById('msgerr')
const msgAlertEl = document.querySelector('.msg-alert')

form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      msgAlertEl.classList.remove('show')
      msgEl.innerText = 'Success!, Message sent successfully'
      setTimeout(() => {
         msgAlertEl.classList.add('show')
         msgEl.innerText = ''
      }, 3000);
      
      form.reset();
   })
      .catch(error => {
      msgAlertEl.classList.remove('show')
      msgErrorEl.innerText = 'Error!, Unable to send message'
      setTimeout(() => {
         msgAlertEl.classList.add('show')
         msgErrorEl.innerText = ''
      }, 3000);
      
      form.reset();
   })
})