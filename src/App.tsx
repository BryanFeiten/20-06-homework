import Routers from './Routesrs';
import { ThemeProvider } from '@mui/material/styles';

import ThemeDefault from './config/styles/themes/Default';
import NewGlobalStyles from './config/styles/Globals';

function App() {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <NewGlobalStyles />
      <Routers />
    </ThemeProvider>
  );
}

export default App;