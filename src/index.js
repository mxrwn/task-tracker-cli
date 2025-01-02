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
  let found = tasks.find(task => task.id == id);
  console.log(found);
  if(!found) return console.log("Task does not exist"); 
  console.log(tasks.splice(tasks.indexOf(found), 1));
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

}

if(action === 'delete') {
  deleteTask(pointer);
}

if(action === 'list') {
  readTasks();
}