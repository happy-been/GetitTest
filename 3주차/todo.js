let tasks = [];

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return; // 빈 값 방지
  tasks.push({ text: input.value, done: false });
  input.value = "";
  render();
});

const render = () => {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // 초기화
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.done) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    span.onclick = () => {
      tasks[index].done = !tasks[index].done;
      render();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      render();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
};
