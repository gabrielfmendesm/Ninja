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
      main: '#1B116A',
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
  hidden: { opacity: 0, x: -200 },
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

export default function Creas() {
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
            O Centro de Referência Especializado de Assistência Social
          </Typography>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={titleVariants}>
          <Typography variant="h5" component="div" color="black" sx={{ mb: 4, zIndex: 1, pr: 30, pl: 30 }}>
            CREAS é uma unidade pública da Assistência Social que atende pessoas que vivenciam situações de violações de direitos ou de violências.
          </Typography>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
          <Link to="/beneficios" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color='primary'
              sx={{
                padding: '20px 40px',
                fontSize: '22px',
                zIndex: 1,
                mt: 6,
                backgroundColor: '#F6C606',
                color: '#ffffff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#fcd746',
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
          <Typography variant="h4" component="div" color="primary" sx={{ textAlign: 'center', mb: 5 }}>
            Um pouco mais sobre o CREAS
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Apoio Psicossocial
                  </Typography>
                  <Typography>
                    O serviço de apoio psicossocial é voltado para indivíduos e famílias que enfrentam situações de vulnerabilidade e risco social.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Acompanhamento de Medidas Socioeducativas
                  </Typography>
                  <Typography>
                    O CREAS realiza o acompanhamento de adolescentes em cumprimento de medidas socioeducativas em meio aberto, como liberdade assistida e prestação de serviços à comunidade.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Atendimento a Vítimas de Violência
                  </Typography>
                  <Typography>
                    O serviço de atendimento a vítimas de violência abrange apoio a mulheres, crianças, adolescentes e idosos que sofreram abuso ou negligência.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Prevenção e Enfrentamento à Situação de Rua
                  </Typography>
                  <Typography>
                    Este serviço é direcionado a indivíduos e famílias em situação de rua, proporcionando ações de acolhimento, inclusão social e acesso a direitos básicos.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" component="div" color="primary" sx={{ textAlign: 'center', mb: 5 }}>
            Quem Pode Usar o CREAS?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Família em situação de risco
                  </Typography>
                  <Typography>
                    Tais situações podem incidir sobre as relações familiares e comunitárias, gerando conflitos.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Indivíduo em situação de risco
                  </Typography>
                  <Typography>
                    Tais circunstâncias podem afetar a saúde mental e física, comprometendo a capacidade de tomada de decisões e a qualidade de vida.
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