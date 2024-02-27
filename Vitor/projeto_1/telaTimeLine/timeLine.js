var premiumUser = false;
        var tasks = []; // Armazenar todas as tarefas

        function createTask() {
            if (!premiumUser) {
                alert("Você precisa ser um usuário premium para criar tarefas.");
                return;
            }

            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;
            var dueDate = document.getElementById('due-date').value;

            if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Criar uma nova tarefa
            var newTask = {
                title: title,
                description: description,
                dueDate: dueDate
            };

            // Adicionar a nova tarefa à lista de tarefas
            tasks.push(newTask);

            // Renderizar a nova tarefa na aba premium
            renderTask(newTask);

            alert("Tarefa criada com sucesso!");
        }

        function upgrade() {
            premiumUser = true;
            document.getElementById('premium-content').style.display = 'block';
            document.getElementById('premium-button').style.display = 'none';
        }

        function cancelPremium() {
            premiumUser = false;
            document.getElementById('premium-content').style.display = 'none';
            document.getElementById('premium-button').style.display = 'inline-block';
        }

        function renderTask(task) {
            var tasksDiv = document.getElementById('tasks');

            var taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.innerHTML = `
                <h2>${task.title}</h2>
                <p>${task.description}</p>
                <p>Data de Finalização: ${task.dueDate}</p>
            `;

            var commentButton = document.createElement('button');
            commentButton.textContent = "Comentar";
            commentButton.addEventListener('click', function() {
                commentTask(task.id);
            });
            taskDiv.appendChild(commentButton);

            tasksDiv.appendChild(taskDiv);
        }

        function commentTask(taskId) {
            var comment = prompt("Digite seu comentário:");
            if (comment !== null && comment.trim() !== '') {
                // Aqui você pode adicionar lógica para adicionar o comentário à tarefa com o ID 'taskId'
                alert("Comentário enviado com sucesso!");
            }
        }