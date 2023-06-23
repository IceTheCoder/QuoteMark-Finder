console.log("Hello, World!");
const languageDropDown = document.querySelector('#languageDropDown');
const selectedOption = document.querySelector('#selectedOption');

languageDropDown.addEventListener('change', () => {
  selectedOption.textContent = languageDropDown.value;
});
