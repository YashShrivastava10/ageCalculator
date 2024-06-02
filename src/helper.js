export const handleToggle = () => {
  const elem = document.querySelector("#switch")
  const button = document.querySelector('button');
  if(elem.checked){
    document.querySelector(".calculator-container").style.background = "white"
    document.querySelector(".show").style.color = "black"
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = 'black';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'hsl(259, 100%, 65%)';
    });
  }
  else if(!elem.checked){
    document.querySelector(".calculator-container").style.background = "black"
    document.querySelector(".show").style.color = "white"
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = 'grey';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'hsl(259, 100%, 65%)';
    });
  }
}