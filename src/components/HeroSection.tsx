import { Grid, Box, Typography, Link, alpha } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { PrimaryButton } from "./ui/PrimaryButton";
import { SectionEyebrow } from "./common/SectionEyebrow";
import { ChatBubble } from "./common/ChatBubble";
import { TypingDot } from "./common/TypingDot";

// Gold tint that follows primary.main, so there is no hardcoded rgba(212,175,55,x)
const goldTint = (opacity: number) => (theme: Theme) =>
  alpha(theme.palette.primary.main, opacity);

const users = [
  { id: "1", nameInitial: "A", bgColor: "primary.main" },
  { id: "2", nameInitial: "S", bgColor: "#c9963a" },
  { id: "3", nameInitial: "K", bgColor: "#b87f2d" },
  { id: "4", nameInitial: "V", bgColor: "secondary.main" },
];

const messages = [
  { id: 1, from: "stranger", text: "I've been feeling really lonely lately… don't know who to talk to 😔" },
  { id: 2, from: "me", text: "I'm here. You can tell me anything, no judgement at all." },
  { id: 3, from: "stranger", text: "Really? That means so much 🥺" },
];

const TYPING_DELAYS = [0, 0.2, 0.4];

export const HeroSection = () => {
  const clickCallback = () => {
    console.log("Clicks on the button");
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "calc(100vh - 87px)",
        display: "flex",
        alignItems: "center",
        px: { xs: 2, sm: 6, md: 14 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        sx={{ alignItems: "center", width: "100%" }}
      >
        {/* Left column: text content */}
        <Grid size={{ xs: 12, sm: 6, md: 8 }}>
          <SectionEyebrow label="You are never alone" />

          <Box>
            {/* fontFamily, fontWeight and lineHeight now come from theme.typography.h1 */}
            <Typography
              variant="h1"
              component="h1"
              sx={{ maxWidth: "300px", mb: 2.5 }}
            >
              Someone is always there to{" "}
              <Box component="em" sx={{ color: "primary.main" }}>
                listen.
              </Box>
            </Typography>

            {/* lineHeight now comes from theme.typography.body1 */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: 300,
                color: "text.secondary",
                maxWidth: "360px",
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

            {/* Real link: keyboard accessible, scrolls to the section with id="how-it-works" */}
            <Link
              href="#how-it-works"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.secondary",
                fontSize: "13px",
              }}
            >
              How it works
              <ArrowForwardIcon sx={{ width: 18 }} />
            </Link>
          </Box>

          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {users.map((user) => (
                <Box
                  key={user.id}
                  sx={{
                    border: "2px solid",
                    borderColor: "background.default",
                    borderRadius: "50%",
                    padding: "15px",
                    bgcolor: user.bgColor,
                    width: "30px",
                    height: "30px",
                    marginRight: "-9px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "primary.contrastText",
                  }}
                >
                  {user.nameInitial}
                </Box>
              ))}
            </Box>

            <Box sx={{ maxWidth: "170px" }}>
              <Typography
                variant="body2"
                sx={{ color: "text.disabled", lineHeight: 1.5 }}
              >
                <Box component="span" sx={{ color: "text.secondary" }}>
                  48,000+ people
                </Box>{" "}
                have shared their feelings anonymously
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right column: decorative chat preview */}
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          aria-hidden="true"
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "end",
            alignItems: "center",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              width: "220px",
              borderRadius: "32px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              overflow: "hidden",
              maxHeight: "fit-content",
            }}
          >
            {/* Card header */}
            <Box
              sx={{
                display: "flex",
                px: 2,
                py: 1.5,
                bgcolor: "background.cardGrey",
                gap: 1.25,
                flex: 1,
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  bgcolor: goldTint(0.12),
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: goldTint(0.2),
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Typography sx={{ fontSize: "14px", color: "primary.main" }}>
                  A
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.1 }}>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 400, color: "text.primary" }}
                >
                  Stranger #4821
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "text.disabled", fontSize: "10px" }}
                >
                  online
                </Typography>
              </Box>

              <Box
                sx={{
                  bgcolor: goldTint(0.12),
                  borderRadius: 1.25,
                  justifyContent: "center",
                  alignItems: "center",
                  maxHeight: "fit-content",
                  py: 0.1,
                  px: 0.6,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "primary.dark", fontSize: "10px" }}
                >
                  anon
                </Typography>
              </Box>
            </Box>

            {/* Messages */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                gap: 1.25,
              }}
            >
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  text={message.text}
                  from={message.from}
                />
              ))}

              {/* Typing indicator */}
              <Box
                sx={{
                  display: "flex",
                  gap: 0.5,
                  bgcolor: "background.subtle",
                  borderRadius: "14px",
                  borderBottomLeftRadius: "4px",
                  alignSelf: "flex-start",
                  py: 1,
                  px: 1.5,
                  maxWidth: "155px",
                  alignItems: "center",
                }}
              >
                {TYPING_DELAYS.map((delay) => (
                  <TypingDot key={delay} delay={delay} />
                ))}
              </Box>
            </Box>

            {/* Input bar */}
            <Box
              sx={{
                display: "flex",
                px: 2,
                py: 1.5,
                bgcolor: "background.cardGrey",
                gap: 1.25,
                flex: 1,
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                sx={{
                  bgcolor: "background.subtle",
                  p: "7px 12px",
                  minWidth: "150px",
                  borderRadius: "100px",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "text.disabled", lineHeight: 1.5 }}
                >
                  Say Something kind...
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};