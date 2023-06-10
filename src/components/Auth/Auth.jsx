import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Auth = () => {
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    hasAccount,
    setPassword,
    setEmail,
    setHasAccount,
    handleLogin,
    handleSignup,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='lg'>
          <CssBaseline />
          <Box
            sx={{
              mb: 8,
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
              justifyContent: {
                xs: 'center',
                md: 'space-around',
              },
              alignItems: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
          >
            <Box
              sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
                width: { xs: '90%', sm: '70%', md: '35%' },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 26,
                }}
                component='h1'
                variant='h5'
              >
                Sign In
              </Typography>
              <Box
                component='form'
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 3 }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: 14, sm: 16 },
                  }}
                >
                  Email
                </Typography>
                <TextField
                  className='input-email'
                  required
                  fullWidth
                  id='email'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  // ===========
                  helperText={emailError}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <Box sx={{ mt: 2 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                    Password
                  </Typography>
                  <TextField
                    className='input-password'
                    required
                    fullWidth
                    name='password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    // ===============
                    helperText={passwordError}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    sx={{ borderRadius: '0' }}
                  />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mt: 1,
                    }}
                  >
                    {' '}
                  </Box>
                </Box>
                {hasAccount ? (
                  <Button
                    className='button_sign_in'
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2, fontWeight: 600, backgroundColor: 'grey', color: 'black' }}
                    onClick={() => {
                      handleLogin();
                      navigate('/');
                    }}
                  >
                    Sign in
                  </Button>
                ) : (
                  <Button
                    className='button_register'
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2, fontWeight: 600, backgroundColor: 'grey', color: 'black' }}
                    onClick={() => {
                        handleSignup();
                        navigate('/')
                    }}
                    
                  >
                    Register
                  </Button>
                )}

                <Grid
                  container
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Grid item>
                    {hasAccount ? (
                      <Link
                        className='links'
                        sx={{ color: 'white', fontSize: '1.2rem', textDecoration: 'none', border: '2px solid white', padding: '5px', borderRadius: '15px' }}
                        href='#'
                        variant='body2'
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        {"Register now"}
                      </Link>
                    ) : (
                      <Link
                        className='links'
                        sx={{ color: 'white', fontSize: '1.2rem', textDecoration: 'none', border: '2px solid white', padding: '5px', borderRadius: '15px' }}
                        href='#'
                        variant='body2'
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        {'Log In'}
                      </Link>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'block',
                },
              }}
              id='line'
            ></Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Auth;
