import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoTask from './TodoTask';
import NewTaskForm from './NewTaskForm';
import { v4 as uuidv4 } from 'uuid';
import {Box} from "@mui/system"
import { Typography } from '@mui/material';

const sampleTodos = [
  {id: uuidv4(), content: "This is a sample todo task", completed: false},
  {id: uuidv4(), content: "Read first todo Task", completed: true},
  {id: uuidv4(), content: "Delete me", completed: false},
]

const getinitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"))
  if (!data) return sampleTodos
  return data
}

export default function TodoList(){
  const [todos, setTodos] = useState(getinitialData)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if(todo.id === id){
          return {...todo, completed: !todo.completed}
        } else {
          return todo
        }
      })
    })
  }

  const addTask = (content) => {
    setTodos(prevTodos => {
      return [...prevTodos, {content: content, id: uuidv4(), completed: false}]
    })
  }

  return (
    <Box
      sx={{
        display : "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: 4 
      }}
    >
      <Typography variant="h2" component="h2">
        To-Dos
      </Typography>
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          return (
            <TodoTask 
              todo={todo}
              key={todo.id}
              removeProp={()=> {removeTodo(todo.id)}}
              toggleProp={()=> {toggleTodo(todo.id)}}
            />
          );
        })}
        <NewTaskForm addTask={addTask} />
      </List>
    </Box>
  )
}


