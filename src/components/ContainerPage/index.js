import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import App from '../../App';

const ContainerPage = () => {
    return (
        <>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <App />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>

    );
}

export default ContainerPage;