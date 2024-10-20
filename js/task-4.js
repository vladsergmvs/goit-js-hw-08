

////////////////////////////////////////////////////////
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

const loginFormObject = {};
 
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
    alert('All form fields must be filled in');
  } else {
    for(let element of registerForm.elements) {
      if(element.name) {
        loginFormObject[element.name] = element.value.trim(); 
      }
    }
    console.log(loginFormObject); 
  }
   
  
  form.reset();
}
////////////////////////////////////////////////////////////////

const styles = document.createElement('style');
styles.textContent =
  ` .login-form{
        display: flex;
       flex-direction: column;
       border-radius: 8px;
        padding: 24px;
        width: 408px;
         margin: 0 auto;
        background: #fff;
     }
        label, input{
         display: block;
        }
        input{
         display: block;
         width: 360px;
        height: 40px;
        }
     button{
     margin-top: 16px;
       border-radius: 8px;
         padding: 8px 16px;         
          width: 86px;
         height: 40px;
        background: #4e75ff; 
     }
 `;
document.head.append(styles); 