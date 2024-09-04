import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box, Typography, Card, CardContent, CardMedia, Grid, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from './Header';
import Footer from './footer/Footer';
import insper from '../images/Insper_UNAS.png';
import unas from '../images/UNAS.png';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const cardVariants = {
  hidden: (isLeft) => ({
    opacity: 0,
    x: isLeft ? -500 : 500,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3.2,
      type: 'spring',
    },
  },
};

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, []);

  function load() {
    fetch('http://localhost:8080/avisos', {
      method: 'GET'
    }).then(response => {
      return response.json();
    }).then(data => {
      setData(data);
    });
  }

  const handleCardClick = () => {
    navigate(`/edicao-aviso`);
  };

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Alert severity="warning" sx={{ mt: 8}}>Avisos:</Alert>
      
      {data.map((aviso) => (
        <Card 
          key={aviso.id} 
          sx={{
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            mb: 2,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#f0f0f0',
              transition: 'background-color 0.3s ease',
            },
            '&:active': {
              backgroundColor: '#e0e0e0',
              transition: 'background-color 0.1s ease',
            }
          }}
          onClick={handleCardClick}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {aviso.nome}
            </Typography>
            <Typography>
              {aviso.descricao}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Container sx={{ mt: 4 }}>
        <Box sx={{ my: 4 }}>
          <motion.div
            custom={true}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Card sx={{ mb: 4, backgroundColor: '#F6C606', borderRadius: 8, pr: 5, pt: 3, pb: 3, mr: 20 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="div" color="black" sx={{ mr: 50 }}>
                      UNAS
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mt: 2, mr: 10, ml: 10, textAlign: 'left' }}>
                      A UNAS (União de Núcleos, Associações dos Moradores de Heliópolis e Região) é uma organização sem fins lucrativos fundada em 1978, que promove a cidadania e autonomia dos moradores de Heliópolis, São Paulo. Com 55 projetos sociais, impactamos diretamente 6 mil pessoas por mês em áreas como educação, saúde e direitos humanos. Nosso conceito de "Bairro Educador" transforma a comunidade em um espaço de educação contínua e participativa. Contamos com 720 colaboradores e buscamos parcerias para construir uma sociedade mais justa e democrática.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CardMedia
                      component="img"
                      src={unas}
                      alt="UNAS"
                      sx={{ borderRadius: 2, height: '100%' }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={false}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Card sx={{ mb: 4, backgroundColor: '#000000', borderRadius: 8, pr: 8, pt: 4, pb: 4, ml: 20 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="div" color="white" sx={{ mr: 50 }}>
                      Insper
                    </Typography>
                    <Typography variant="body1" color='white' component="p" sx={{ mt: 2, mr: 10, ml: 10, textAlign: 'left' }}>
                      O Insper é uma instituição de ensino superior em São Paulo que oferece cursos de graduação e pós-graduação em negócios, economia, direito, engenharia e tecnologia. Com foco na prática e na inovação, busca formar profissionais éticos e competentes, promovendo um ambiente de aprendizado colaborativo. O Insper também investe em pesquisa para contribuir com soluções para os desafios atuais.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CardMedia
                      component="img"
                      src={insper}
                      alt="Insper"
                      sx={{ borderRadius: 2, height: '40%', mt: 10}}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;