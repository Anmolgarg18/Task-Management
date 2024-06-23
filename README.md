# Task Management Application

This is a full-stack Task Management Application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to create, read, update, and delete tasks with ease.

## Features

- **Add new tasks**: Users can add tasks with a title, description, and due date.
- **View tasks**: Users can view a list of all tasks.
- **Edit tasks**: Users can update the details of existing tasks.
- **Delete tasks**: Users can remove tasks from the list.
- **Responsive Design**: The application is usable on both desktop and mobile devices.

## Technologies Used

- **Front-end**: React, Axios
- **Back-end**: Node.js, Express.js, MongoDB, Mongoose
- **Styling**: CSS

## Project Structure
task-manager/
├── backend/
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── .gitignore
├── README.md
└── package.json

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository**:

  
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
2.set up the backend:

cd backend
npm install

3.Set up the frontend:
cd ../frontend
npm install
4 Start the MongoDB server:
mongod
5.Run the backend server:
cd backend
node server.js
6.Run the frontend server:
cd frontend
npm start
