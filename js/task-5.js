function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

changeColorButton.addEventListener('click', event => {
  event.preventDefault();
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorName.textContent = currentColor;
  colorName.style.color = currentColor;
});
/////////////////////////////////////////////////

const styles = document.createElement('style');
styles.textContent = `
  .widget{
       border-radius: 8px;
      padding: 100px 88px;
      width: 345px;
      height: 280px;
      background: #fff;
  }
  .change-color{  
      border-radius: 8px;
      padding: 8px 16px;
      width: 148px;
      height: 40px;
      background: #4e75ff;
  }
 `;
document.head.append(styles);
