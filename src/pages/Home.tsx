import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import type { FormikErrors } from 'formik';
import PrimaryButton from "../components/primaryButton";

function Home() {
  const theme = useTheme(); 
  
  const reviewsUsersDetails = [
    {
      '_id': '1',
      'nameInitial': 'A',
      'bgColor': theme.palette.primary.main
    },
    {
      '_id': '2',
      'nameInitial': 'S',
      'bgColor': '#c9963a'
    },
    {
      '_id': '3',
      'nameInitial': 'K',
      'bgColor': '#b87f2d'
    },
    {
      '_id': '4',
      'nameInitial': 'V',
      'bgColor': '#F59E0B'
    }
  ] 

  return (
    <>
      <Box sx={{ bgcolor: theme.customColors.surface, height: { xs: '100%', sm: 'calc(100vh - 76px)' }, overflow: { md: 'hidden' }, display: 'flex', alignItems: 'center', px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid size={{ xs: 12, sm: 6, md: 8 }}>
            <Box>
              <Box sx={{ mb: 3.5, gap: 1.25, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ minWidth: '28px', height: '1px', backgroundColor: 'text.goldtext' }}></Box>
                <Typography sx={{ color:'text.goldtext', fontSize: '12px', fontweight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: '"Inter", sans-serif' }}>You are never alone</Typography>           
              </Box>
            
              <Box sx={{ mb: 2.5, maxWidth: { sm: '250px', md: '500px' } }}>
                <Typography sx={{ color: 'text.cream', fontSize: { sm: '32px', md: '52px' }, lineHeight: 1.1, letterSpacing: '-0.01em'  }}>
                  Someone is always there to{' '}
                  <Box component="em" sx={{ color: 'text.gold', fontStyle: 'italic' }}>
                    listen.
                  </Box>
                </Typography>
              </Box>

              <Box sx={{ mb: 4.5 }}>
                <Typography variant="body1" sx={{ color: 'text.grey', lineHeight: 1.85, maxWidth: '360px' }}>No names. No profiles. Just real people, real feelings — shared safely. Chazt connects you with someone who genuinely wants to listen, anytime you need it.</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: 6 }}>
                <PrimaryButton text={'Start Talking'} callback={(()=>{})} />
                <Link href="#" sx={{ color: 'text.grey', underline: 'none', textDecoration: 'none' }}>How it works? →</Link>
              </Box>

              <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {reviewsUsersDetails.map((user: any, index: any) => {
                    return (
                      <Box sx={{ bgcolor: user.bgColor, display: 'flex', width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #0C0A0F', justifyContent: 'center', alignItems: 'center', marginLeft: index !== 0 ? '-10px' : '0px'}}>
                        {user.nameInitial}
                      </Box>
                    )
                  })}
                </Box>
                <Box> 
                  <Typography variant='caption' sx={{ color: 'rgba(245,240,232,0.65)', display: 'flex', alignItems: 'center', gap: '5px' }}> <Typography sx={{ fontWeight: '600'}}>48,000+</Typography> People have shared</Typography>
                  <Typography sx={{ color: 'rgba(245,240,232,0.65)', fontSize: '11px' }}>their feeling anonymously</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
            <Box sx={{
              width: '220px',
              background: '#161320',
              borderRadius: '32px',
              border: '1px solid rgba(255,255,255,0.07)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)'
            }}>
              <Box sx={{
                background: '#111018',
                padding: '14px 16px 10px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Box sx={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#D4AF37', flexShrink: 0 }}>
                  A
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 500, color: 'rgba(245,240,232,0.8)', display: 'flex', alignItems: 'center', gap: '5px', fontFamily: '"Inter", sans-serif' }}>
                    Stranger #4821
                    <Typography component='span' sx={{ fontSize: '9px', background: 'rgba(212,175,55,0.12)', color: '#C9A227', borderRadius: '100px', padding: '1px 6px', letterSpacing: '0.06em', fontWeight: '400', fontFamily: '"Inter", sans-serif' }}>
                      anon
                    </Typography>
                  </Typography>
                  <Typography sx={{ fontSize: '10px', color: 'rgba(245,240,232,0.25)', mt: '1px', fontFamily: '"Inter", sans-serif' }}>
                    online
                  </Typography>
                </Box>
              </Box>

              <Stack direction='column' spacing={2.5} sx={{ alignItems: 'center', p: '14px 12px' }}>
                <Box sx={{ background: 'rgba(255,255,255,0.05)', borderRadius: '14px', borderBottomLeftRadius: '4px', alignSelf: 'flex-start', maxWidth: '80%', p: '9px 13px' }}>
                  <Typography sx={{fontSize: '12px', fontWeight: '300', lineHeight: '1.55', animation: 'msg-in 0.4s ease both', fontFamily: '"Inter", sans-serif', color: 'rgb(228 219 205 / 70%)' }}>I've been feeling really lonely lately… don't know who to talk to 😔</Typography>
                </Box>
                <Box sx={{ background: 'rgba(212,175,55,0.14)', borderRadius: '14px', borderBottomLeftRadius: '4px', alignSelf: 'flex-end', maxWidth: '80%', p: '9px 13px' }}>
                  <Typography sx={{fontSize: '12px', fontWeight: '300', lineHeight: '1.55', animation: 'msg-in 0.4s ease both', fontFamily: '"Inter", sans-serif', color: 'rgb(228 219 205 / 70%)' }}>I'm here. You can tell me anything, no judgement at all.</Typography>
                </Box>
                <Box sx={{ background: 'rgba(255,255,255,0.05)', borderRadius: '14px', borderBottomLeftRadius: '4px', alignSelf: 'flex-start', maxWidth: '80%', p: '9px 13px' }}>
                  <Typography sx={{fontSize: '12px', fontWeight: '300', lineHeight: '1.55', animation: 'msg-in 0.4s ease both', fontFamily: '"Inter", sans-serif', color: 'rgb(228 219 205 / 70%)' }}>Really? That means so much 🥺</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', borderBottomLeftRadius: '4px', alignSelf: 'flex-start', maxWidth: '80%', p: '9px 13px' }}>
                  {[0, 0.2, 0.4].map((delay) => (
                    <Box
                      key={delay}
                      sx={{
                        width: '5px',
                        height: '5px',
                        flexShrink: 0,
                        borderRadius: '50%',
                        background: 'rgba(245,240,232,0.25)',
                        animation: 'typing-bounce 1.2s ease-in-out infinite',
                        animationDelay: `${delay}s`,
                      }}
                    />
                  ))}
                </Box>
              </Stack>

              <Box sx={{
                background: '#111018',
                padding: '14px',
                borderAbove: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                      const errors: FormikErrors<typeof values> = {};
                      if (!values.email) {
                        errors.email = 'Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                      ) {
                        errors.email = 'Invalid email address';
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Box
                      component={Form}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '14px',
                        borderBottomLeftRadius: '4px',
                        maxWidth: '80%',
                        p: '9px 13px',
                      }}
                    >
                        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
                          <TextField
                            name="chatInput"
                            placeholder="Say something kind…"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                                height: 25,
                              },
                              "& .MuiOutlinedInput-input": {
                                fontSize: "14px",
                                padding: "12px",
                              },
                              "& .MuiOutlinedInput-input::placeholder": {
                                fontSize: "12px",
                                color: "#999",
                                opacity: 1,
                                fontFamily: '"Inter", sans-serif',
                              },
                            }}
                          />
                          {(isSubmitting ? <></> : 
                            <IconButton
                              sx={{
                                width: 24,
                                height: 24,
                                bgcolor: "primary.main",
                                color: "white",
                                "&:hover": {
                                  bgcolor: "primary.dark",
                                },
                              }}
                            >
                              <ArrowForwardIosIcon sx={{ color: 'black', fontSize: 10 }} />
                            </IconButton>
                          )}
                        </Box>
                      </Box>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
