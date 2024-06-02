export const handleToggle = () => {
  const elem = document.querySelector<HTMLInputElement>("#switch");
  const button = document.querySelector<HTMLButtonElement>('button');
  const calculatorContainer = document.querySelector<HTMLElement>(".calculator-container");
  const showElement = document.querySelector<HTMLElement>(".show");

  if (!elem || !button || !calculatorContainer || !showElement) return;

  if (elem.checked) {
    calculatorContainer.style.background = "white";
    showElement.style.color = "black";
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = 'black';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'hsl(259, 100%, 65%)';
    });
  } else {
    calculatorContainer.style.background = "black";
    showElement.style.color = "white";
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = 'grey';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'hsl(259, 100%, 65%)';
    });
  }
}
