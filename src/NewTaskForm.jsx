import ListItem from '@mui/material/ListItem';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export default function NewTaskForm({ addTask }){

  const [content, setContent] = useState("")
  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addTask(content)
    setContent("")
  }

  return (
    <ListItem >
      <form onSubmit={handleSubmit} className='new-task'>
        <TextField 
          fullWidth
          id="standard-basic"
          label="Add Task"
          variant="standard"
          onChange={handleChange}
          value={content}
          InputProps = {{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create task" type='submit'>
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </form>
    </ListItem>
  )
}
