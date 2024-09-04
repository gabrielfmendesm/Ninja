import React, { useEffect, useState } from 'react';
import { Autocomplete, Box, Button, List, TextField, ListItem, ListItemText, Typography, Divider, ListItemAvatar, Avatar, Container, createTheme, ThemeProvider, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from './Header';
import { motion } from 'framer-motion';
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
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: 'spring' },
  },
};

export default function Beneficios() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [setores, setSetores] = useState([]);
  const [selectedSetor, setSelectedSetor] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadBeneficios();
    loadSetores();
  }, []);

  async function loadBeneficios() {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/beneficios', {
        method: 'GET',
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  async function loadSetores() {
    try {
      const response = await fetch('http://localhost:8080/setores', {
        method: 'GET',
      });
      const data = await response.json();
      setSetores(data);
    } catch (error) {
      setSetores([]);
    }
  }

  const handleSearchChange = (event, value) => {
    setSearchQuery(value);
  };

  const handleSetorChange = (event, value) => {
    setSelectedSetor(value);
  };

  const filteredData = data.filter(beneficio => 
    beneficio.nome.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!selectedSetor || beneficio.setor === selectedSetor.setor)
  );

  const handleBeneficioClick = (id) => {
    navigate(`/beneficios/${id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Container component={motion.div} initial="hidden" animate="visible" variants={containerVariants} sx={{ textAlign: 'center' }}>
        <Typography
          sx={{ display: 'inline', fontWeight: 'bold', fontSize: 30, lineHeight: 3 }}
          color="black"
          variant="h6"
          gutterBottom
        >
          Benefícios
        </Typography>
        <Autocomplete
          options={setores}
          getOptionLabel={(option) => option.setor}
          onChange={handleSetorChange}
          renderInput={(params) => (
            <TextField {...params} label="Filtrar por Setor" variant="outlined" fullWidth />
          )}
          sx={{ mb: 2 }}
        />
        <Autocomplete
          freeSolo
          options={data.map((beneficio) => beneficio.nome)}
          onInputChange={handleSearchChange}
          renderInput={(params) => (
            <TextField {...params} label="Pesquisar Benefícios" variant="outlined" fullWidth />
          )}
          sx={{ mb: 4 }}
        />
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </Box>
        ) : filteredData.length === 0 ? (
          <Typography variant="h6" color="textSecondary" align="center">
            Nenhum benefício cadastrado
          </Typography>
        ) : (
          <List sx={{ width: '100%', maxHeight: 600, overflow: 'auto', maxWidth: 600, bgcolor: 'background.paper' }}>
            {filteredData.map((beneficio, index) => (
              <Button 
                onClick={() => handleBeneficioClick(beneficio.id)}
                variant='outlined' 
                sx={{ width: '100%', mt: 2, borderRadius: 5 }} 
                key={index}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Insper" src={logo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline', fontWeight: 'bold', fontSize: 25 }}
                          color="black"
                          variant="h6"
                          gutterBottom
                        >
                          {beneficio.nome}
                        </Typography><br />
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline', fontWeight: 700, fontSize: 15 }}
                          variant="body2"
                          color="#535251"
                          component="span"
                        >
                          {beneficio.setor}
                        </Typography><br />
                        <Typography
                          sx={{ display: 'inline', fontWeight: 400, fontSize: 14 }}
                          variant="body2"
                          color="#535251"
                          component="span"
                        >
                          {beneficio.descricao}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Button>
            ))}
            <Divider variant="inset" component="li" />
          </List>
        )}
      </Container>
    </ThemeProvider>
  );
}