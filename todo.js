
//grab button 
document.getElementById("add-todo")
.addEventListener("click", () => { 
  //grab input
  const todoInput = document.getElementById("todo-input"); 
  //grab text 
  const text = todoInput.value; 

  //grab todos
  const todos = document.getElementById("todos"); 

  //make li 
  const todoListItem = document.createElement('li'); 

  //add text to todoListItem
  todoListItem.append(text);

  //add todoListItem to todos

  todos.append(todoListItem); 

  //clear input 
  todoInput.value = ''; 

})