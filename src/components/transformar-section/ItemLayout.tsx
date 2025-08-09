import { Box, Typography } from "@mui/joy";
import type React from "react";

type ItemLayoutProps = {
  title?: String;
  subtitle: String;
  text: String;
  text1: String;
};

export const ItemLayout: React.FC<ItemLayoutProps> = ({
  title,
  subtitle,
  text,
  text1,
}) => {
  return (
    <>
      <Box
        width={"90%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"5px"}
      >
        {title && (
          <Typography level="h1" sx={{ color: "primary.100" }}>
            {title}
          </Typography>
        )}

        <Typography level="h2" sx={{ color: "#ffffff" }}>
          {subtitle}
        </Typography>
        <Typography
          level="body-md"
          sx={{ color: "#ffffff", display: "flex", flexDirection: "column" }}
        >
          <Typography>{text}</Typography>
          <Typography>{text1}</Typography>
        </Typography>
      </Box>
    </>
  );
};
