const list = document.querySelector("#shoppingList");

const h2 = document.createElement("h2");
h2.textContent = "Nuevo Item";
shoppingList.appendChild(h2);

const newItem = document.createElement("input");
newItem.type = "text";
h2.appendChild(newItem);

const addButton = document.createElement("button");
addButton.type = "button";
addButton.innerText = "Add";
h2.appendChild(addButton);

function addItems(event) {
  let newItemLi = document.createElement("li");
  let shoppingItems = document.querySelector("#shoppingItems");
  if (newItem.value) {
    newItemLi.innerHTML = newItem.value;
    shoppingItems.appendChild(newItemLi);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    newItemLi.appendChild(deleteButton);
  }
}
addButton.onclick = addItems;
