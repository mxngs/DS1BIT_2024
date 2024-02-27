
document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('taskForm');
  const pendingTasksList = document.getElementById('pendingTasks');
  const completedTasksList = document.getElementById('completedTasks');

  taskForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const taskTitle = document.getElementById('taskTitle').value;
      const taskDescription = document.getElementById('taskDescription').value;
      const taskDueDate = document.getElementById('taskDueDate').value;

      if (taskTitle && taskDescription && taskDueDate) {
          const newTaskItem = document.createElement('li');
          newTaskItem.innerHTML = `
              <strong>${taskTitle}</strong> - ${taskDescription} (Due: ${taskDueDate})
          `;
          const completeButton = document.createElement('button');
          completeButton.textContent = 'Concluir';
          completeButton.addEventListener('click', function () {
              newTaskItem.remove();
              completedTasksList.appendChild(newTaskItem);
              completeButton.remove();
          });
          newTaskItem.appendChild(completeButton);

          pendingTasksList.appendChild(newTaskItem);

          taskForm.reset();
      } else {
          alert('Por favor, preencha todos os campos da tarefa.');
      }
  });
});
// Adiciona um botão de "Editar" para cada tarefa
function addEditButton(taskItem) {
  const editButton = document.createElement('button');
  editButton.textContent = 'Editar';
  editButton.addEventListener('click', function () {
      const taskTitle = taskItem.querySelector('strong').textContent;
      const taskDescription = taskItem.textContent.split('-')[1].split('(Due:')[0].trim();
      const taskDueDate = taskItem.textContent.split('(Due:')[1].split(')')[0].trim();

      document.getElementById('taskTitle').value = taskTitle;
      document.getElementById('taskDescription').value = taskDescription;
      document.getElementById('taskDueDate').value = taskDueDate;

      taskItem.remove();
  });
  return editButton;
}

// Atualiza a tarefa com os novos dados
function updateTask(taskItem, newTitle, newDescription, newDueDate) {
  taskItem.innerHTML = `
      <strong>${newTitle}</strong> - ${newDescription} (Due: ${newDueDate})
  `;
  const editButton = addEditButton(taskItem);
  const completeButton = createCompleteButton(taskItem);
  taskItem.appendChild(editButton);
  taskItem.appendChild(completeButton);
}
