import fs from 'fs';


const tasks = JSON.parse(await fs.readFileSync('./src/tasks.json', 'utf-8'));

const [action, pointer, ...args] = process.argv.slice(2);

const readTasks = () => {
  console.log(tasks)
}

const addTask = async (text) => {
  const task = createTask(tasks.length, text);
  tasks.push(task);
  await fs.writeFileSync('./src/tasks.json', JSON.stringify(tasks));
  console.log(task);
}

const updateTask = (id) => {

}

const deleteTask = async (id) => {
  console.log(id);
  if (id > -1) { // only splice array when item is found
    tasks.splice(id, 1); // 2nd parameter means remove one item only
  }
  console.log("tasks", t);
  await fs.writeFileSync('./src/tasks.json', JSON.stringify(tasks));
  console.log(tasks);
}

const createTask = (id, description) => {
  return {
    id,
    description,
    status: "todo",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
}


if(action === 'add') {
  addTask(pointer);
}

if(action === 'update') {

}

if(action === 'delete') {
  deleteTask(pointer);
}

if(action === 'list') {
  readTasks();
}