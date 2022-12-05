function add_task() {
  if (document.getElementById("task_input").value == 0) {
    alert("Please Entre a TasK");
  } else {
      
    document.getElementById("tasks").innerHTML += `
    <task>
                <label>
                <input type="checkbox" hidden id="check">
              <check_icon><i class="fa-solid fa-check"></i></check_icon>
                <task_name>
                ${document.getElementById("task_input").value}
                </task_name></label>
                <delete_icon class="delete_task"><i class="fa-regular fa-trash-can"></i></delete_icon>
              </task>
  
    `;
    var current_task = document.querySelectorAll(".delete_task");
    for (var i = 0; i < current_task.length;i++){
    current_task[i].onclick = function(){
      this.parentNode.remove();
      
    }
    }
  

    
  }
}




