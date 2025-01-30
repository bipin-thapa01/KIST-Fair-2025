const errors = document.querySelectorAll('.error');
errors.forEach(error =>{
  error.style.display = 'none';
})
let name;
let number;
function isAlphabet(str){
  return /^[A-Za-z ]+$/.test(str);
}
setInterval(()=>{
  name = document.querySelector('#name').value;
  number = document.querySelector('#number').value;
  if(!isAlphabet(name)&&name!==''){
    document.querySelector('.name-error').style.display = 'block';
  }
  else{
    document.querySelector('.name-error').style.display = 'none';
  }
  if(isNaN(number)&&number!==null){
    document.querySelector('.number-error').style.display = 'block';
  }
  else{
    document.querySelector('.number-error').style.display = 'none';
  }
  if(number>9999999999&&number!==null){
    document.querySelector('.number-length-error').style.display = 'block';
  }
  else{
    document.querySelector('.number-length-error').style.display = 'none';
  }
},1000);

document.querySelector('#registration-form').addEventListener('submit',(e)=>{
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let number = document.querySelector('#number').value;
  let org = document.querySelector('#organization').value;
  if(name===''||email===''||number===''||org===''){
    alert('All the field with * must be filled!');
    event.preventDefault();
  }
})