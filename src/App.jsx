import './App.css'
import CssBaseLine from "@mui/material/CssBaseline"
import TodoList from './TodoList'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseLine />
      <TodoList />
    </ThemeProvider>
  )
}

export default App
