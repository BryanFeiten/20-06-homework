import Routers from './Routesrs';
import { ThemeProvider } from '@mui/material/styles'; 

import createTheme from './config/styles/themes/Default';
import NewGlobalStyles from './config/styles/Globals';

export default function App() {
  return (
    <ThemeProvider theme={createTheme}>
      <NewGlobalStyles />
      <Routers />
    </ThemeProvider>
  );
}