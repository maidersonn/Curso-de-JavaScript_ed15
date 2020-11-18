const newItemInput = document.querySelector("#new-item");
const addItem = document.querySelector("#add-item");

const arrayList = [];

const theList = document.querySelector(".list");

function addToList() {
  const newItemValue = newItemInput.value;

  if (newItemValue !== "") {
    arrayList.push(newItemValue);
    const listElement = document.createElement("li");
    const newProduct = document.createElement("span");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("button-delete");
    buttonDelete.textContent = "Eliminar";

    newProduct.textContent = newItemValue;
    listElement.appendChild(newProduct);
    listElement.appendChild(buttonDelete);
    theList.appendChild(listElement);

    newItemInput.value = "";

    buttonDelete.addEventListener("click", deleteItem);

    function deleteItem() {
      this.parentNode.parentNode.removeChild(listElement);
    }
  }
}
addItem.addEventListener("click", addToList);
