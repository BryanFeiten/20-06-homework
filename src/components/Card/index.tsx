import {
  Typography,
  Paper,
  Button,
  TextField,
  Grid,
} from "@mui/material";

import {
  PaperStyled,
  PaperTitle,
  CountView,
} from './styles';

type OptionalProps = {
  title?: string,
  description?: string,
  handleDecreaseCount: (count: any) => void,
  handleIncreaseCount: (count: any) => void,
  count: number
  changeText: (newText: React.InputHTMLAttributes<HTMLInputElement>) => void,
  text: string,
}

export default function Card({ title, description, count, handleIncreaseCount, handleDecreaseCount, changeText, text }: OptionalProps) {

  return (
    <PaperStyled elevation={4}>
      <PaperTitle variant='h3'>{title}</PaperTitle>
      <Grid container xs={12} spacing='10px'>
        <Grid container item xs={4}>
          <Typography variant='h5' textAlign='center'>
            {description}
          </Typography>
        </Grid>
        <Grid container item xs={4} border='1px solid' flexDirection='column' borderColor='primary'>
          <CountView align='center'>
            {count}
          </CountView>
          <Grid item margin='auto'>
            <Button color='secondary' variant='contained' onClick={handleIncreaseCount}>+1</Button>
            <Button color='secondary' variant='contained' onClick={handleDecreaseCount}>-1</Button>
          </Grid>
        </Grid>
        <Grid item xs={4} margin='auto'>
          <TextField id="filled-basic" label="Filled" variant="filled" onChange={(e: React.InputHTMLAttributes<HTMLInputElement>) => changeText(e)} value={text} color='secondary' />
        </Grid>
      </Grid>
    </PaperStyled>
  );
}