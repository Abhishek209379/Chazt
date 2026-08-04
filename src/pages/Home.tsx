import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from "@mui/material";
import { PrimaryButton } from '../components/ui/PrimaryButton';
import Grid from '@mui/material/Grid';

const Home = (() => {
    const clickCallback = (() => {
        console.log("Clicks on the button");
    })

    const users = [
        {
            id: '1',
            nameInitial: 'A',
            bgColor: '#D4AF37'
        },
        {
            id: '2',
            nameInitial: 'S',
            bgColor: '#c9963a'
        },
        {
            id: '3',
            nameInitial: 'K',
            bgColor: '#b87f2d'
        },
        {
            id: '4',
            nameInitial: 'V',
            bgColor: '#F59E0B'
        }
    ]

    return (
        <Box sx={{ backgroundColor: "background.default", height: "calc('100vh-97px')", p: 7 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 3.5 }}>
                        <Box sx={{ width: '28px', backgroundColor: 'border.main', height: '0.6px' }}></Box>
                        <Typography sx={{ textTransform: 'uppercase', color: 'text.gold', fontWeight: 500, letterSpacing: '0.2em', fontSize: '11px' }}>
                            You are never alone
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant='h1' component='h1'
                            sx={{ 
                                fontWeight: 300,
                                fontFamily: "'Fraunces',serif",
                                maxWidth: '300px',
                                lineHeight: 1.1,
                                color: 'text.cream',
                                mb: 2.5
                            }}>
                            Someone is always there to <Box component="em" sx={{ color: 'text.gold' }}>listen.</Box>
                        </Typography>
                        <Typography variant="body1"
                            sx={{
                                fontWeight: 300,
                                color: 'rgba(245, 240, 232, 0.4)',
                                maxWidth: '360px',
                                lineHeight: 1.85,
                                mb: 3.5
                            }}
                        >
                            No names. No profiles. Just real people, real feelings — shared safely. Chazt connects you with someone who genuinely wants to listen, anytime you need it.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 6 }}>
                        <PrimaryButton label='Start Talking' onClick={clickCallback} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}>
                            <Typography sx={{ color: 'rgba(245,240,232,0.4)', fontSize: '13px' }}>How it works</Typography>
                            <ArrowForwardIcon sx={{ width: 18, color: 'rgba(245,240,232,0.4)' }} />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            {users.map((user)=>(
                                <Box sx={{ 
                                    border: '2px solid #0C0A0F',
                                    borderRadius: '50%',
                                    padding: '15px',
                                    background: user.bgColor,
                                    width: '30px',
                                    height: '30px',
                                    marginRight: '-9px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: 'text.dark'
                                }}>
                                    {user.nameInitial}
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{ maxWidth: '170px' }}>
                            <Typography variant="body2" sx={{ color: 'rgba(245,240,232,0.35)', lineHeight: 1.5 }}><Box component="span" sx={{ color: 'rgba(245,240,232,0.65)'}}>48,000+ people</Box>  have shared their feelings anonymously</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={{ border: '1px solid rgba(255,255,255,0.07)', background: '#161320', width: '220px', borderRadius: '32px', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
                        <Box sx={{ display: 'flex', px: 2, py: 1.5, backgroundColor: 'background.cardGrey', gap: 1.25, flex: 1, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <Box sx={{ width: '32px', height: '32px', backgroundColor: 'rgba(212,175,55,0.12)', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.2)', alignItems: 'center', justifyContent: 'center', fontSize: '14px', display: 'flex' }}>
                                <Typography sx={{ fontSize: '14px', color: 'primary.main' }}>A</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'rgba(245,240,232,0.8)' }}>Stranger #4821</Typography>
                                <Typography sx={{ color: 'rgba(245,240,232,0.25)', fontSize: '10px' }}>online</Typography>
                            </Box>
                            <Box sx={{ background: 'rgba(212,175,55,0.12)', color: 'background.golden', borderRadius: 1.25, justifyContent: 'center', alignItems: 'center', maxHeight: 'fit-content', py: 0.1, px: 0.6 }}>
                                <Typography variant='body2' sx={{ color: 'text.gold1', fontSize: '10px' }}>anon</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', px: 2, py: 1.5, gap: 1.25 }}>
                            <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '14px', borderBottomLeftRadius: '4px', alignSelf: 'flex-start', py: 1, px: 1.5, fs: 1.5, lineHeight: 1.55, maxWidth: '155px' }}>
                                <Typography sx={{ color: 'text.creamYellow', fontSize: '12px' }}>I've been feeling really lonely lately… don't know who to talk to 😔</Typography>
                            </Box>
                            <Box sx={{ backgroundColor: 'background.goldenBlack', borderRadius: '14px', borderBottomRightRadius: '4px', alignSelf: 'flex-end', py: 1, px: 1.5, fs: 1.5, lineHeight: 1.55, maxWidth: '155px' }}>
                                <Typography sx={{ color: 'text.creamYellow', fontSize: '12px' }}>I'm here. You can tell me anything, no judgement at all.</Typography>  
                            </Box>
                            <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '14px', borderBottomLeftRadius: '4px', alignSelf: 'flex-start', py: 1, px: 1.5, fs: 1.5, lineHeight: 1.55, maxWidth: '155px' }}>
                                <Typography sx={{ color: 'text.creamYellow', fontSize: '12px' }}>Really? That means so much 🥺</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 0.5, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '14px', borderBottomLeftRadius: '4px', alignSelf: 'flex-start', py: 1, px: 1.5, fs: 1.5, lineHeight: 1.55, maxWidth: '155px' }}>
                                <Box sx={{ width: '4px', height: '4px', backgroundColor: 'rgba(245,240,232,0.25)', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: `${0 * 0.2}s` }}></Box>
                                <Box sx={{ width: '4px', height: '4px', backgroundColor: 'rgba(245,240,232,0.25)', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: `${1 * 0.2}s` }}></Box>
                                <Box sx={{ width: '4px', height: '4px', backgroundColor: 'rgba(245,240,232,0.25)', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: `${2 * 0.2}s` }}></Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}) 

export default Home;