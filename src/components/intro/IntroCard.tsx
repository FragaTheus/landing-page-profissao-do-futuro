import { Box, Card, CardContent, Typography } from "@mui/joy";
import type React from "react";

type IntroCardProps = {
  icon: React.ReactNode;
  text: String;
};

export const IntroCard: React.FC<IntroCardProps> = ({ icon, text }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "180px",
        height: "180px",
        bgcolor: "transparent",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.100",
          width: "25%",
          borderRadius: "sm",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "10px",
        }}
      >
        {icon}
      </Box>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "flex-start",
          padding: "5px",
        }}
      >
        <Typography level="body-md" sx={{ color: "text.primary" }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
