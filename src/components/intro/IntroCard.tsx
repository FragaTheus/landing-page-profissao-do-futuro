import { Card, CardActions, CardContent, Typography } from "@mui/joy";
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
      <CardActions>
        <Typography>{icon}</Typography>
      </CardActions>
      <CardContent>{text}</CardContent>
    </Card>
  );
};
