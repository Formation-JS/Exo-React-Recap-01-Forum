import { Box, Container, CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Footer from './containers/footer';
import Header from './containers/header';
import { appRoute } from './routes';

function App() {
  const routes = useRoutes(appRoute);

  return (<>
    <CssBaseline />
    <Box display='flex' minHeight='100vh' flexDirection='column'>
      <Header />
      <Box flex={1}>
        <main>
          <Container >
            {routes}
          </Container>
        </main>
      </Box>
      <Footer />
    </Box>
  </>);
}

export default App;
