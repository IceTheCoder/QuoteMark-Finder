var dropdown = document.getElementById("myDropdown");
var selectedOption = document.getElementById("selectedOption");

dropdown.addEventListener("change", function() {
  var selectedValue = dropdown.options[dropdown.selectedIndex].value;
  selectedOption.textContent = "Selected option: " + selectedValue;
});
