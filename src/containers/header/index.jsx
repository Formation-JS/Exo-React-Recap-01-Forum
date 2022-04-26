import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                        component={NavLink}
                        to='/'
                    >
                        <HomeIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', flexGrow: 1, gap: '20px' }}>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/subjects' sx={{ textDecoration: 'none' }}>
                            Subjects
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/about' sx={{ textDecoration: 'none' }}>
                            About
                        </Typography>
                    </Box>
                    <Button color='inherit' component={NavLink} to='/register'>Register</Button>
                    <Button color='inherit' component={NavLink} to='/login'>Login</Button>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;