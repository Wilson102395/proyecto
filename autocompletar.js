var countries = [];
var inputElem = null;
var resultsElem = null;
var activeIndex = 0;
var filteredResults = [];

function init() {
  fetch("https://www.datos.gov.co/resource/gt2j-8ykr.json")
    .then((response) => response.json())
    .then((data) => (countries = data));

  resultsElem = document.querySelector("ul");
  inputElem = document.querySelector("input");

  resultsElem.addEventListener("click", (event) => {
    handleResultClick(event);
  });
  inputElem.addEventListener("input", (event) => {
    autocomplete(event);
  });
  inputElem.addEventListener("keyup", (event) => {
    handleResultKeyDown(event);
  });
}

function autocomplete(event) {
  const value = inputElem.value;
  if (!value) {
    hideResults();
    inputElem.value = "";
    return;
  }
  filteredResults = countries.filter((country) => {
    return country.departamento_nom.toLowerCase().startsWith(value.toLowerCase());
  });

  resultsElem.innerHTML = filteredResults
    .map((result, index) => {
      const isSelected = index === 0;
      return `
        <li
          id='autocomplete-result-${index}'
          class='autocomplete-result${isSelected ? " selected" : ""}'
          role='option'
          ${isSelected ? "aria-selected='true'" : ""}
        >
          ${result.departamento_nom}
        </li>
      `;
    })
    .join("");
  resultsElem.classList.remove("hidden");
}

function handleResultClick() {
  if (event.target && event.target.nodeName === "LI") {
    selectItem(event.target);
  }
}
function handleResultKeyDown(event) {
  const { key } = event;
  const activeItem = this.getItemAt(activeIndex);
  if (activeItem) {
   activeItem.classList.remove('selected');
   activeItem.setAttribute('aria-selected', 'false');
  }
  switch (key) {
    case "Backspace":
      return;
    case "Escape":
      hideResults();
      inputElem.value = "";
      return;
    case "ArrowUp": {
      if (activeIndex === 0) {
        activeIndex = filteredResults.length - 1;
      }
      activeIndex--;
      break;
    }
    case "ArrowDown": {
      if (activeIndex === filteredResults.length - 1) {
        activeIndex = 0;
      }
      activeIndex++;
      break;
    }
    default:
      selectFirstResult();
  }
  selectResult();
}
function selectFirstResult() {
  activeIndex = 0;
}

function selectResult() {
  const value = inputElem.value;
  const autocompleteValue = filteredResults[activeIndex].departamento_nom;
  const activeItem = this.getItemAt(activeIndex);
  if (activeItem) {
   activeItem.classList.add('selected');
   activeItem.setAttribute('aria-selected', 'true');
  }
  if (!value || !autocompleteValue) {
    return;
  }
  if (value !== autocompleteValue) {
    inputElem.value = autocompleteValue;
    inputElem.setSelectionRange(value.length, autocompleteValue.length);
  }
}
function selectItem(node) {
  if (node) {
    inputElem.value = node.innerText;
    hideResults();
  }
}

function hideResults() {
  this.resultsElem.innerHTML = "";
  this.resultsElem.classList.add("hidden");
}

function getItemAt(index) {
  return this.resultsElem.querySelector(`#autocomplete-result-${index}`)
}

init();