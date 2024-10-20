/**
 * 
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення
 в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . 
 Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
 * 
 */

///////////////////////////////////////////////////////////////////////////////////////////////////

 const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
 
  const textInputTrimmed = event.currentTarget.value.trim();
  if(textInputTrimmed === ''){
    output.textContent = 'Anonymous';
  }else{
    output.textContent = textInputTrimmed; 
  }
});

////////////////////////////////////////////////////////////////////////////////////

const styles = document.createElement('style');
styles.textContent =
  `
    #name-input{
      margin: 0 auto 0 auto;
     width: 360px;
    height: 40px;
  }
 `;
document.head.append(styles);
