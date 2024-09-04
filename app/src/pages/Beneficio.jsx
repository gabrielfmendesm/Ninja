import React, { useState, useEffect } from 'react';
import { Box, Container, CssBaseline, Typography, List, ListItem, ListItemText, CircularProgress, Card, CardContent, Avatar, createTheme, ThemeProvider, Divider, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from './Header';
import logo from '../images/UNAS_logo.png';

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
  hidden: { opacity: 0, y: 250 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, type: 'spring' },
  },
};

const NaoImprimir = styled('div')(({ theme }) => ({
  '@media print': {
    display: 'none',
  },
}));

const ImprimirBotao = styled('button')(({ theme }) => ({
  backgroundColor: '#1B116A',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#F6C606',
  },
}));

export default function MostrarBeneficio() {
  const { id } = useParams();
  const [benefitData, setBenefitData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBenefitData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/beneficios/${id}`);
        const data = await response.json();
        setBenefitData(data);
      } catch (error) {
        console.error('Erro ao carregar dados do benefício:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefitData();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!benefitData || Object.keys(benefitData).length === 0) {
    return (
      <Typography variant="h6" color="textSecondary" align="center">
        Benefício não encontrado.
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <NaoImprimir>
        <ResponsiveAppBar />
      </NaoImprimir>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <Box sx={{ marginTop: 15, flexDirection: 'column', alignItems: 'center' }}>
            <Card sx={{ width: '100%', mb: 4, borderRadius: 5 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar alt={benefitData.nome} src={benefitData.imagem || logo} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: '36px' }}>
                    {benefitData.nome}
                  </Typography>
                </Box>
                <Typography component="h2" variant="h6" sx={{ fontWeight: 'bold', fontSize: '20px', mb: 2 }}>
                  {benefitData.setor}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {benefitData.descricao}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography component="h2" variant="h6" sx={{ fontWeight: 'bold', fontSize: '20px', mb: 2 }}>
                  Requisitos
                </Typography>
                <List>
                  {benefitData.requisitos?.map((requisito, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <FiberManualRecordIcon sx={{ fontSize: 'large' }} />
                      </ListItemIcon>
                      <ListItemText primary={requisito} />
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ my: 2 }} />
                <Typography component="h2" variant="h6" sx={{ fontWeight: 'bold', fontSize: '20px', mb: 2 }}>
                  Documentos Necessários
                </Typography>
                <List>
                  {benefitData.documentos?.map((documento, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <FiberManualRecordIcon sx={{ fontSize: 'large' }} />
                      </ListItemIcon>
                      <ListItemText primary={documento} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
              <ImprimirBotao onClick={() => window.print()}>
                Imprimir
              </ImprimirBotao>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </ThemeProvider>
  );
}