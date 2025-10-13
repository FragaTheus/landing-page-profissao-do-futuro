import {
    
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import { useResContext } from "../../contexts/responsive-context/ResponsiveContext";
import { Box } from "@mui/material";

export const Cta1 = () => {
  const { isMobile } = useResContext();
  return (
    <Card
      variant="soft"
      sx={{ bgcolor: "background.surface", height: "75svh" }}
    >
      <CardActions
        sx={{
          bgcolor: "#121212",
          borderRadius: "sm",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          level="h2"
          textAlign={"center"}
          sx={{ color: "text.secondary" }}
        >
          Quanto Custa a Sua Liberdade Financeira?
        </Typography>
      </CardActions>
      <CardContent sx={isMobile? {display: "flex", flexDirection: "column"}:{display: "flex", flexDirection: "row"}}>
        <Box width={isMobile? "100%": "50%"} height={isMobile? "50%":"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Typography level="h2">Preço Exclusivo:</Typography>
            <Typography level="h2">R$49,90</Typography>
            <Button variant="solid" sx={{ mt: "20px" }}>
              <Typography
                level="body-lg"
                textAlign={"center"}
                sx={{ color: "#ffffff" }}
              >
                Quero uma renda extra.
              </Typography>
            </Button>
        </Box>
        <Box width={isMobile? "100%":"50%"} height={isMobile? "50%":"100%"} display={"flex"} padding={"30px"} alignItems={"center"} justifyContent={"center"}>
            <Typography level="body-md" textAlign={"center"} sx={{color:"text.primary"}}>
                Sim, apenas R$49,90 por um eBook completo com tudo o que você precisa para
                começar a ganhar dinheiro na internet hoje mesmo. Esse é um investimento que você
r               ecupera rapidamente, só realizando as tarefas que ensinamos!
            </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
