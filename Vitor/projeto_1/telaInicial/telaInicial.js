
document.getElementById('task-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;

  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Data:</strong> ${date}</p>
    <p>${description}</p>
  `;

  document.getElementById('task-list').appendChild(taskItem);
  document.getElementById('task-list').appendChild(taskItem);
  
  // Limpar os campos do formulário
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('date').value = '';
});

document.getElementById('task-list').addEventListener('click', function(e) {
  if (e.target && e.target.matches('.task-item')) {
    const task = e.target;
    
    // Permitir a edição do título da tarefa
    const title = task.querySelector('h3');
    const newTitle = prompt('Editar título:', title.textContent);
    if (newTitle !== null) {
      title.textContent = newTitle;
    }
    
    // Permitir a edição da descrição da tarefa
    const description = task.querySelector('p:nth-of-type(3)');
    const newDescription = prompt('Editar descrição:', description.textContent);
    if (newDescription !== null) {
      description.textContent = newDescription;
    }
    
    // Permitir a edição da data da tarefa
    const date = task.querySelector('p:nth-of-type(2)');
    const newDate = prompt('Editar data:', date.textContent.split(':')[1].trim());
    if (newDate !== null) {
      date.textContent = `Data: ${newDate}`;

    }
  }
    });

    