const inputEl = document.querySelector("#txtInput");
const btnAddEl = document.querySelector("#btnAdd");
const btnSortEl = document.querySelector("#btnSort");
const btnReverseEl = document.querySelector("#btnReverse");
const btnRemoveLastEl = document.querySelector("#btnRemoveLast");
const btnRemoveFirstEl = document.querySelector("#btnRemoveFirst");
const btnRemoveAllEl = document.querySelector("#btnRemoveAll");
const btnMixEl = document.querySelector("#btnMix");
const ulEl = document.querySelector("#listGroup");
const liEl = document.querySelector("#listGroupItem");

// create an array
let newArray = ["Apple", "Rabbit", "Banana", "Kids"];

// keypress enter
inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    btnAddEl.click();
  }
});

// show the array items
const showItems = () => {
  let template = newArray
    .map(
      (item) =>
        ` <li class="list-group-item shadow-lg bg-body rounded mb-2" id="listGroupItem">${item}</li>`
    )
    .join(`\n`);
  ulEl.innerHTML = template;
};

showItems();

// add new item to array
btnAddEl.addEventListener("click", () => {
  if (!inputEl.value || inputEl.value === null) {
    alert("Please enter a valid data :)");
    return;
  }

  newArray.push(inputEl.value);
  inputEl.value = "";
  showItems();
});

// sort items
btnSortEl.addEventListener("click", () => {
  newArray.sort();
  showItems();
});

// reverse items
btnReverseEl.addEventListener("click", () => {
  newArray.reverse();
  showItems();
});

// remove last item
btnRemoveLastEl.addEventListener("click", () => {
  newArray.pop();
  showItems();
});

// remove first item
btnRemoveFirstEl.addEventListener("click", () => {
  newArray.shift();
  showItems();
});

// remove all items
btnRemoveAllEl.addEventListener("click", () => {
  newArray.length = 0;
  showItems();
});

// mix items
btnMixEl.addEventListener("click", () => {
  newArray.sort((a, b) => 0.5 - Math.random());
  showItems();
});
