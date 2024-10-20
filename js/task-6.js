function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector('#controls input'),
  divBoxes = document.querySelector('#boxes'),
  createBtn = document.querySelector('[data-create]'),
  destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', event => {
  if (+amountInput.value <= 100 && +amountInput.value >= 1) {
    divBoxes.append(...createBoxes(+amountInput.value));
  }
});

destroyBtn.addEventListener('click', event => {
  divBoxes.innerHTML = '';
  amountInput.value = 0;
});

const createBoxes = amount => {
  const tempArray = [];
  for (let i = 0; i < amount; i++) {
    const divContainer = document.createElement('div');
    divContainer.style.width = `${30 + i * 10}px`;
    divContainer.style.height = `${30 + i * 10}px`;
    divContainer.style.backgroundColor = getRandomHexColor();
    tempArray.push(divContainer);
  }
  return tempArray;
};

///////////////////////////////////////////////////////////

const styles = document.createElement('style');
styles.textContent = `
    #boxes{
      display: flex;
      flex-wrap: wrap;
      gap: 44px;
      border-radius: 8px;
padding: 32px;
width: 486px;
height: 134px;
background: #f6f6fe;
  }

   #controls{
     border-radius: 8px;
padding: 32px;
width: 486px;
height: 104px;
background: #f6f6fe;
margin-bottom: 16px;
   }

#controls input{
  border: 1px solid #808080;
border-radius: 8px;
padding: 8px ;
width: 150px;
height: 40px;
}

[data-create]{
border-radius: 8px;
padding: 8px 16px;
width: 120px;
height: 40px;
background: #4e75ff;
}

[data-destroy]{
   border-radius: 8px;
padding: 8px 16px;
width: 120px;
height: 40px;
background: #ff4e4e;
}
 `;
document.head.append(styles);
