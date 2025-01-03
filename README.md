# Task Tracker CLI

Task Tracker CLI is a simple command-line application for managing tasks. Built using Node.js, it allows you to add, list, update, and delete tasks with ease.
## Installation

  
1. Clone the repository:

```bash
git clone https://github.com/your-username/task-tracker-cli.git
```

2. Navigate to the project directory:

```bash
cd task-tracker-cli
```


3. Install the dependencies:

```bash
npm install
```
## Usage

To start the application ,use the following command:

  ```bash
  npm start
  ```
### Commands

1. Add a task
```bash
npm start add "{task}"
```

2. List tasks (filters: ongoing, done)
```bash
npm start list {filter}
```

5. Update a task
```bash
npm start update {task_id} {new_status}
```

7. Delete a task
```bash
npm start delete {task_id}
```

## Features

- Add tasks with a text
- List tasks based on their status
- Update the status of any tasks by its ID
- Remove tasks when they are no longer needed.

## Contributing

This is an early version and made thanks to the proposition to the backend roadmap on roadmap.sh and contributions are welcome! If you would like to contribute, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.

