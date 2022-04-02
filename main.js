var input, button, task, main,statut,item,storedlist;
input = document.querySelector("#item");

//table qui contient shopping items
let shoppingList = [];

button = document.querySelector("#enter");
main = document.querySelector("main");
var mytask = document.querySelector("div>p")

var states = document.querySelectorAll("#statut");
console.log(states);

function createAndaddelementsToParent() {
  if(input.value.trim().length > 0){

  statut = document.createElement("input");
  statut.setAttribute("type", "checkbox");
  statut.setAttribute("id", "statut");

  var delIcon = document.createElement("i");
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



shoppingList.push(item);
console.log(shoppingList);

localStorage.setItem("list",JSON.stringify(shoppingList));

storedlist = JSON.parse(localStorage.getItem("list"));

  


  }
  else{
    alert('You entered an empty item !')
  }
}



function loadExistingItems() {
  storedlist = JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")): [];

  for (const object of  storedlist) {
    storeAndaddelementsToParent(object)
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
  task.textContent = object; 
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





button.addEventListener("click", createAndaddelementsToParent);
// Mark as done
// function taskDone(index){
//   // console.log(task);
//   task[index].classList.toggle("done");
// }

// states.forEach((state,index) => {
//   state.addEventListener("change",taskDone(index));
// });



