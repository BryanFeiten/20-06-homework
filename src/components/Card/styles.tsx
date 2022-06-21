import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PaperStyled = styled(Paper) ({
    padding: '20px',
    background: '#ccc',
    margin: '10px',
});

export const PaperTitle = styled(Typography) ({
    textAlign: 'center',
    fontSize: '40px',
})

export const CountView = styled(Typography) ({
    fontSize: '30px',
    fontWeight: 'bold',
})