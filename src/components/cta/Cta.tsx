import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/joy";
import { useResContext } from "../../contexts/responsive-context/ResponsiveContext";
import { Star } from "@mui/icons-material";

export const Cta = () => {
  const { isMobile } = useResContext();
  return (
    <Card variant="outlined" sx={{ bgcolor: "transparent", height: "70svh" }}>
      <CardActions
        sx={{
          bgcolor: "transparent",
          borderRadius: "sm",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          level="h2"
          textAlign={"center"}
          sx={{ color: "primary.100" }}
        >
          Saiba como utilizar plataformas confiáveis para gerar uma boa renda
          extra.
        </Typography>
      </CardActions>
      <Divider />
      <CardContent
        sx={
          isMobile
            ? { display: "flex", flexDirection: "collum" }
            : { display: "flex", flexDirection: "row" }
        }
      >
        <Box
          width={isMobile ? "100%" : "50%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            level="body-lg"
            textAlign={"center"}
            sx={{ color: "primary.100" }}
          >
            Atenção,
          </Typography>
          <Typography
            level="body-lg"
            textAlign={"center"}
            sx={{ color: "text.primary" }}
          >
            tenho apenas 10 vagas
          </Typography>
          <Typography
            level="body-lg"
            textAlign={"center"}
            sx={{ color: "primary.100" }}
          >
            faça tarefas em até 24.
          </Typography>
          <Typography level="body-lg" textAlign={"center"}>
            Método comprovado!
          </Typography>
          {!isMobile && (
            <Button variant="solid" sx={{ mt: "20px" }}>
              <Typography
                level="body-lg"
                textAlign={"center"}
                sx={{ color: "#ffffff" }}
              >
                Quero uma renda extra.
              </Typography>
            </Button>
          )}
        </Box>
        <Box
          width={isMobile ? "100%" : "50%"}
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Box display={"flex"}>
            <Avatar></Avatar>
            <Avatar></Avatar>
            <Avatar></Avatar>
            <Avatar></Avatar>
            <Avatar></Avatar>
            <Avatar></Avatar>
          </Box>
          <Typography level="body-lg" sx={{ color: "text.primary" }}>
            Mais de 1.533 pessoas ativadas.
          </Typography>
          <Typography level="body-lg" sx={{ color: "text.primary" }}>
            NOTA EXCELENTE!
          </Typography>
          <Box display={"flex"}>
            <Star sx={{ color: "primary.100", fontSize: "lg" }} />
            <Star sx={{ color: "primary.100", fontSize: "lg" }} />
            <Star sx={{ color: "primary.100", fontSize: "lg" }} />
            <Star sx={{ color: "primary.100", fontSize: "lg" }} />
            <Star sx={{ color: "primary.100", fontSize: "lg" }} />
          </Box>
          {isMobile && (
            <Button variant="solid" sx={{ mt: "20px" }}>
              <Typography
                level="body-lg"
                textAlign={"center"}
                sx={{ color: "#ffffff" }}
              >
                Quero uma renda extra.
              </Typography>
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
