import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import { useResContext } from "../../contexts/responsive-context/ResponsiveContext";
import { Star } from "@mui/icons-material";
import { usePayContext } from "../../contexts/payment/ToPaymentContext";

export const Cta = () => {
  const { isMobile } = useResContext();
  const {toLink} = usePayContext();
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
          Saiba como utilizar plataformas confiáveis para gerar uma boa renda
          extra.
        </Typography>
      </CardActions>
      <CardContent
        sx={
          isMobile
            ? { display: "flex", flexDirection: "collum", gap: "20px" }
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
            tenho apenas 10 vagas do curso
          </Typography>
          <Typography
            level="body-lg"
            textAlign={"center"}
            sx={{ color: "primary.100" }}
          >
            Profissão do século 2.0.
          </Typography>
          <Typography
            level="body-lg"
            textAlign={"center"}
            sx={{ color: "text.primary" }}
          >
            MÉTODO COMPROVADO!
          </Typography>
          {!isMobile && (
            <Button onClick={()=> toLink()} variant="solid" sx={{ mt: "20px" }}>
              <Typography
                level="body-lg"
                textAlign={"center"}
                sx={{ color: "text.primary" }}
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
            <Avatar size="sm" src="avatar-img1.jpg" />
            <Avatar size="sm" src="avatar-img2.jpg" />
            <Avatar size="sm" src="avatar-img3.jpg" />
            <Avatar size="sm" src="avatar-img4.jpg" />
            <Avatar size="sm" src="avatar-img5.jpg" />
            <Avatar size="sm" src="avatar-img6.jpg" />
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
            <Button onClick={()=> toLink()} variant="solid" sx={{ mt: "20px" }}>
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
