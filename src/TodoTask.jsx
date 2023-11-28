import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoTask({todo, removeProp, toggleProp}){

  const labelId = `checkbox-list-label-${todo.id}`;

  return(
    <ListItem
            secondaryAction={
              <IconButton edge="start" aria-label="delete" onClick={removeProp}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
            onClick={toggleProp}
            onChange={toggleProp}
    >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onChange={toggleProp}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={todo.content}  />
            </ListItemButton>
          </ListItem>
  )
}