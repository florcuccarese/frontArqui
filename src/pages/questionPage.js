import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "../components/navbar.js";
import { styled } from '@mui/material/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


const MainPage = styled('div')(({ theme }) => ({
  margin: theme.spacing(4), 
}));

const images = [
    {
      url: 'https://cdn.discordapp.com/attachments/786469581178667041/1103776246980165752/AAAAAElFTkSuQmCC.png',
      title: 'Amazonas',
      width: '33.3%',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/786469581178667041/1103776662845403166/xznJZgi2TkEgAAAABJRU5ErkJggg.png',
      title: 'Nilo',
      width: '33.3%',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/786469581178667041/1103776478728044696/wf4NGLgUq0IAAAAABJRU5ErkJggg.png',
      title: 'Misisipi',
      width: '33.3%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
    
export default function QuestionPage(props) {
  const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar auth={true}/>
            <MainPage>
            <Grid container alignItems={"center"} alignContent={"center"} spacing={11} mt={9}>
            <Grid item xs={12}>
            <Typography variant="h4" marked="center" align="center" component="h2" mb={6}>
                Pregunta
            </Typography>
            <Divider variant='middle'></Divider>
            </Grid>
            <Grid item marked="center" align="center" xs={12}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '40%' }}>
            {images.map((image) => (
                <ImageButton
                focusRipple
                key={image.title}
                style={{
                    width: image.width,
                }}
                >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
                </ImageButton>
            ))}
            </Box>
            </Grid>
            </Grid>
          </MainPage>

        </ThemeProvider>
      );
}