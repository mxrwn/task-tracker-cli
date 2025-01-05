import fs from 'fs';


const tasks = JSON.parse(await fs.readFileSync('./src/tasks.json', 'utf-8'));

const [action, pointer, status, ...args] = process.argv.slice(2);

const readTasks = (filter) => {
  if(!filter) return console.log(tasks);
  const filteredTasks = tasks.filter(tasks => tasks.status === filter);
  console.log(filteredTasks)
}

const addTask = async (text) => {
  const task = createTask(tasks.length, text);
  tasks.push(task);
  await fs.writeFileSync('./src/tasks.json', JSON.stringify(tasks));
  console.log(task);
}

const updateTask = async (id, status) => {
  let found = tasks.find(task => task.id == id);
  if(!found) return console.log("Task does not exist"); 
  found.status = status;
  found.updatedAt = Date.now();
  tasks.splice(tasks.indexOf(found), 1);
  tasks.push(found);
  await fs.writeFileSync('./src/tasks.json', JSON.stringify(tasks));
  console.log(tasks);
}

const deleteTask = async (id) => {
  let found = tasks.find(task => task.id == id);
  if(!found) return console.log("Task does not exist"); 
  tasks.splice(tasks.indexOf(found), 1);
  console.log("tasks", tasks);
  await fs.writeFileSync('./src/tasks.json', JSON.stringify(tasks));
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
  updateTask(pointer, status);
}

if(action === 'delete') {
  deleteTask(pointer);
}

if(action === 'list') {
  readTasks(pointer);
}