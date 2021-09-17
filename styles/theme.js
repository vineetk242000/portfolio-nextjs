import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary:{
        main:'#00C3FF',
        contrastText:"#ffffff"
    } ,
    secondary:{
        main:"#000000",
    },
    error:{
        main:"#e40017"
    },
    warning: {
        main: "#fcc101",
        light: "#fcc101",
        dark: "#fcc101",
    },
    info:{
        main:"#1687a7"
    },
    success:{
        main:"#00917c"
    }
  },
});

