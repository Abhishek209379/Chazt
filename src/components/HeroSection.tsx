import { Grid, Box, Typography } from "@mui/material";
import { PrimaryButton } from "./ui/PrimaryButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { SectionEyebrow } from './common/SectionEyebrow';
import { ChatBubble } from './common/ChatBubble';
import { TypingDot } from './common/TypingDot';


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

const messages = [
    { id: 1, from: "stranger", text: "I've been feeling really lonely lately… don't know who to talk to 😔" },
    { id: 2, from: "me", text: "I'm here. You can tell me anything, no judgement at all." },
    { id: 3, from: "stranger", text: "Really? That means so much 🥺" }
]

export const HeroSection = (() => {
    const clickCallback = () => {
        console.log("Clicks on the button");
    }

    

    return (
      <>
        <Box sx={{ backgroundColor: "background.default", minHeight: "calc(100vh - 87px)", display: 'flex', alignItems: 'center', px: { xs: 2, sm: 6, md: 14 } }}>
            <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            sx={{ alignItems: "center", width: "100%" }}
            >
                <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <SectionEyebrow label="You are never alone" />

                    <Box>
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                            fontWeight: 300,
                            fontFamily: "'Fraunces',serif",
                            maxWidth: "300px",
                            lineHeight: 1.1,
                            color: "text.cream",
                            mb: 2.5,
                            }}
                        >
                            Someone is always there to{" "}
                            <Box component="em" sx={{ color: "text.gold" }}>
                            listen.
                            </Box>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                            fontWeight: 300,
                            color: "rgba(245, 240, 232, 0.4)",
                            maxWidth: "360px",
                            lineHeight: 1.85,
                            mb: 3.5,
                            }}
                        >
                            No names. No profiles. Just real people, real feelings — shared
                            safely. Chazt connects you with someone who genuinely wants to
                            listen, anytime you need it.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 6 }}>
                        <PrimaryButton label="Start Talking" onClick={clickCallback} />
                        <Box
                            sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            cursor: "pointer",
                            }}
                        >
                            <Typography
                            sx={{ color: "rgba(245,240,232,0.4)", fontSize: "13px" }}
                            >
                            How it works
                            </Typography>
                            <ArrowForwardIcon
                            sx={{ width: 18, color: "rgba(245,240,232,0.4)" }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: 1.5 }}>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            {users.map((user) => (
                            <Box
                                sx={{
                                border: "2px solid #0C0A0F",
                                borderRadius: "50%",
                                padding: "15px",
                                background: user.bgColor,
                                width: "30px",
                                height: "30px",
                                marginRight: "-9px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "text.dark",
                                }}
                            >
                                {user.nameInitial}
                            </Box>
                            ))}
                        </Box>

                        <Box sx={{ maxWidth: "170px" }}>
                            <Typography
                            variant="body2"
                            sx={{ color: "rgba(245,240,232,0.35)", lineHeight: 1.5 }}
                            >
                                <Box
                                    component="span"
                                    sx={{ color: "rgba(245,240,232,0.65)" }}
                                >
                                    48,000+ people
                                </Box>{" "}
                                have shared their feelings anonymously
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    size={{ xs: 12, sm: 6, md: 4 }}
                    sx={{
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "end",
                    alignItems: "center",
                    width: { xs: "100%", sm: "auto" },
                    }}
                >
                    <Box
                    sx={{
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "#161320",
                        width: "220px",
                        borderRadius: "32px",
                        boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                        overflow: "hidden",
                        maxHeight: "fit-content",
                    }}
                    >
                    <Box
                        sx={{
                        display: "flex",
                        px: 2,
                        py: 1.5,
                        backgroundColor: "background.cardGrey",
                        gap: 1.25,
                        flex: 1,
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        <Box
                        sx={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "rgba(212,175,55,0.12)",
                            borderRadius: "50%",
                            border: "1px solid rgba(212,175,55,0.2)",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            display: "flex",
                        }}
                        >
                        <Typography sx={{ fontSize: "14px", color: "primary.main" }}>
                            A
                        </Typography>
                        </Box>
                        <Box
                        sx={{ display: "flex", flexDirection: "column", gap: 0.1 }}
                        >
                        <Typography
                            sx={{
                            fontSize: "12px",
                            fontWeight: 400,
                            color: "rgba(245,240,232,0.8)",
                            }}
                        >
                            Stranger #4821
                        </Typography>
                        <Typography
                            sx={{ color: "rgba(245,240,232,0.25)", fontSize: "10px" }}
                        >
                            online
                        </Typography>
                        </Box>
                        <Box
                        sx={{
                            background: "rgba(212,175,55,0.12)",
                            color: "background.golden",
                            borderRadius: 1.25,
                            justifyContent: "center",
                            alignItems: "center",
                            maxHeight: "fit-content",
                            py: 0.1,
                            px: 0.6,
                        }}
                        >
                        <Typography
                            variant="body2"
                            sx={{ color: "text.gold1", fontSize: "10px" }}
                        >
                            anon
                        </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            p: 2,
                            gap: 1.25
                        }}
                    >

                        {/* Below is the messages list which we can do it dynamicall using .map function */}
                        {messages.map((message) => (
                            <ChatBubble key={message.id} text={message.text} from={message.from} />
                        ))}
                        {/* End of the messages list */}


                        {/* Start of the delay dots */}
                        <Box sx={{
                            display: "flex",
                            gap: 0.5,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "14px",
                            borderBottomLeftRadius: "4px",
                            alignSelf: "flex-start",
                            py: 1,
                            px: 1.5,
                            lineHeight: 1.55,
                            maxWidth: "155px",
                            alignItems: "center",
                        }}>
                            {[0, 0.2, 0.4].map(d => <TypingDot key={d} delay={d} />)}
                        </Box>
                        {/* End of the delay dots */}
                    </Box>

                    <Box
                        sx={{
                        display: "flex",
                        px: 2,
                        py: 1.5,
                        backgroundColor: "background.cardGrey",
                        gap: 1.25,
                        flex: 1,
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        <Box
                        sx={{
                            background: "#ffffff0d",
                            p: "7px 12px",
                            minWidth: "150px",
                            borderRadius: "100px",
                        }}
                        >
                        <Typography
                            variant="subtitle1"
                            sx={{ color: "text.cream1", lineHeight: 1.5 }}
                        >
                            Say Something kind...
                        </Typography>
                        </Box>
                        <Box
                        sx={{
                            background: "#D4AF37",
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                        }}
                        ></Box>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
      </>
    );
    
})

