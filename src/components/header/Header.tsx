import { Box, IconButton, Sheet, Typography } from "@mui/joy";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useResContext } from "../../contexts/responsive-context/ResponsiveContext";

export const Header = () => {
  const { isMobile } = useResContext();
  return (
    <Sheet
      id="header"
      component={Box}
      display={"flex"}
      width={"100%"}
      height={"10svh"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingX={isMobile ? "10px" : "80px"}
      sx={{ bgcolor: "#121212" }}
    >
      <Typography level="h2" sx={{ color: "text.secondary" }}>
        Profissão do século 2.0
      </Typography>
      <></>
      <IconButton>
        <ContrastIcon sx={{ color: "#ffffff" }} />
      </IconButton>
    </Sheet>
  );
};
