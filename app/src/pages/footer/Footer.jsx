import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, X, YouTube } from '@mui/icons-material';
import imagemfooter from '../../images/imagem_footer.png';
import imagemfooter2 from '../../images/imagem_footer2.png';
import insperunas from '../../images/Insper_UNAS.png';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        position: 'absolute',
        left: 0,
        width: '100%', 
        bgcolor: "#000000", 
        color: 'white',
        paddingTop: 4,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: 12.5, color: '#F6C606' }}>
              Endereço (UNAS)
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12.5 }}>
              Rua da Mina Central, nº 38
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12.5 }}>
              CEP: 04235460 - Heliópolis São Paulo
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: 12.5, color: '#F6C606' }}>
              Fale Conosco
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12.5 }}>
              (11) 2272-0120
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12.5 }}>
              (11) 2272-0128
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: 12.5, color: '#F6C606' }}>
              Siga a UNAS
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
              <IconButton color="inherit" href="https://www.facebook.com/UNASheliopolis" aria-label="Facebook - UNAS Heliópolis">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://www.instagram.com/unasheliopolis/" aria-label="Instagram - UNAS Heliópolis">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://x.com/UNAS_Heliopolis" aria-label="X (Twitter) - UNAS Heliópolis">
                <X />
              </IconButton>
              <IconButton color="inherit" href="https://www.youtube.com/user/UNASORG" aria-label="YouTube - UNAS Heliópolis">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: 12.5, color: 'white' }}>
              DOE AGORA
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              <img src={imagemfooter} alt='Melhores ONGs Época Doar' width="50" />
              <img src={imagemfooter2} alt='Melhores ONGs 2020' width="50" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={insperunas} alt='Insper | UNAS' width="150" />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', py: 2, mt: 2 }}>
          <Typography variant="body2" sx={{ fontSize: 12.5 }}>
            &copy; {new Date().getFullYear()} Insper. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;