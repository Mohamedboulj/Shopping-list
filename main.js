var input, button, task, main, statut, item, storedlist,delIcon;
input = document.querySelector("#item");
var mytask = document.querySelectorAll("p");
var states = document.querySelectorAll("#statut");

console.log(delIcon);
//table qui contient shopping items
let shoppingList = [];

button = document.querySelector("#enter");
main = document.querySelector("main");

input.addEventListener("keypress", (event) => {
  if (event.code == "Enter") {
    createAndaddelementsToParent();
  }
});

function createAndaddelementsToParent() {
  if (input.value.trim().length > 0) {
    statut = document.createElement("input");
    statut.setAttribute("type", "checkbox");
    statut.setAttribute("id", "statut");

    delIcon = document.createElement("i");
    delIcon.setAttribute("class", "bi bi-trash3-fill");

    var task = document.createElement("p");
    task.textContent = input.value;
    item = task.textContent;
    input.value = "";
    // console.log(task);

    var span2 = document.createElement("span");
    span2.setAttribute("class", "icon-trash");
    span2.appendChild(delIcon);

    var container = document.createElement("div");
    container.setAttribute("class", "task");

    container.appendChild(statut);
    container.appendChild(task);
    container.appendChild(span2);

    main.appendChild(container);

    shoppingList.push({name:item,Done:false});
    console.log(shoppingList);

    localStorage.setItem("list", JSON.stringify(shoppingList));

    storedlist = JSON.parse(localStorage.getItem("list"));
  } else {
    alert("Please add items to your list !");
  }
}

function loadExistingItems() {
  storedlist = JSON.parse(localStorage.getItem("list"))
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  for (const object of storedlist) {
    storeAndaddelementsToParent(object);
  }
}
loadExistingItems();



function storeAndaddelementsToParent(object) {
  statut = document.createElement("input");
  statut.setAttribute("type", "checkbox");
  statut.setAttribute("id", "statut");

  var delIcon = document.createElement("i");
  delIcon.setAttribute("class", "bi bi-trash3-fill");

  var task = document.createElement("p");
  task.textContent = object.name;
  item = task.textContent;

  var span2 = document.createElement("span");
  span2.setAttribute("class", "icon-trash");
  span2.appendChild(delIcon);

  var container = document.createElement("div");
  container.setAttribute("class", "task");

  container.appendChild(statut);
  container.appendChild(task);
  container.appendChild(span2);

  main.appendChild(container);
  return container;
}

console.log(states);
console.log(mytask);

button.addEventListener("click", createAndaddelementsToParent);

let del = (id) => { if (confirm("Remove this item?")) {
  storedlist.splice(id, 1);
  storedlist = JSON.parse(localStorage.getItem("list"))
    ? JSON.parse(localStorage.getItem("list"))
    : [];
    storeAndaddelementsToParent();
}}

// Mark as done
// function taskDone(index){
//  mytask[index].classList.toggle("done");
// }

// states.forEach((state,index) => {
//   console.log(state,index)
//   state.addEventListener("change",taskDone(index))
// })
