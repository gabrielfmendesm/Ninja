import React from 'react';
import { Container, Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './Header';
import Footer from './footer/Footer'; 

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#F6C606',
    },
    secondary: {
      main: '#3F88BD',
    },
  },
});

const containerVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, type: 'spring' },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, type: 'spring' },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: 'spring' },
  },
};

export default function Cras() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={titleVariants}>
          <Typography variant="h2" component="div" color="black" sx={{ mb: 2, zIndex: 1 }}>
            O Centro de Referência de Assistência Social
          </Typography>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={titleVariants}>
          <Typography variant="h5" component="div" color="black" sx={{ mb: 4, zIndex: 1, pr: 30, pl: 30 }}>
            CRAS é uma unidade pública que atua como a principal porta de entrada para o Sistema Único de Assistência Social (SUAS).
          </Typography>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
          <Link to="/beneficios" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color='secondary'
              sx={{
                padding: '20px 40px',
                fontSize: '22px',
                zIndex: 1,
                mt: 6,
                backgroundColor: '#3F88BD',
                color: '#ffffff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#5da2d3',
                  padding: '22px 44px',
                },
              }}
            >
              Aprender sobre benefícios
            </Button>
          </Link>
        </motion.div>
      </Box>
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <Container>
          <Typography variant="h4" component="div" color="secondary" sx={{ textAlign: 'center', mb: 5 }}>
            Um pouco mais sobre o CRAS
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    PAIF
                  </Typography>
                  <Typography>
                    Acompanhamento familiar, orientação e apoio sociofamiliar Atividades socioeducativas e encaminhamento para outros serviços de assistência social.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Programa Bolsa Família
                  </Typography>
                  <Typography>
                    Cadastro e atualização cadastral, orientação sobre o programa e suas condicionalidades e monitoramento do cumprimento das condicionalidades (educação e saúde).
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Apoio à Inclusão Produtiva
                  </Typography>
                  <Typography>
                    Capacitação e cursos profissionalizantes e também orientação para o mercado de trabalho.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ações Comunitárias e Mobilização Social
                  </Typography>
                  <Typography>
                    Realização de eventos comunitários e campanhas de sensibilização e prevenção (saúde, direitos, violência).
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" component="div" color="secondary" sx={{ textAlign: 'center', mb: 5 }}>
            Quem Pode Usar o CRAS?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Situação de Vulnerabilidade Social
                  </Typography>
                  <Typography>
                    Acompanhamento de pessoas e famílias que se encontram em situação de vulnerabilidade social, proporcionando apoio e orientação necessários.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cadastro Único (CadÚnico)
                  </Typography>
                  <Typography>
                    Ferramenta que identifica e caracteriza as famílias de baixa renda, possibilitando o acesso aos programas sociais e benefícios.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
      <Footer /> 
    </ThemeProvider>
  );
}