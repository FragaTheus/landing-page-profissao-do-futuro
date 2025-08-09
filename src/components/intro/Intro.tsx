import { Box, Typography } from "@mui/joy";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GoogleIcon from "@mui/icons-material/Google";
import LanguageIcon from "@mui/icons-material/Language";
import { IntroCard } from "./IntroCard";
import { useResContext } from "../../contexts/responsive-context/ResponsiveContext";

export const Intro = () => {
  const { isMobile } = useResContext();
  return (
    <Box
      width={"90%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"15px"}
    >
      <Typography level="h1" sx={{ color: "primary.100" }}>
        O Que Você Vai Aprender Neste eBook?
      </Typography>
      <Typography level="h2" sx={{ color: "text.primary" }}>
        Tarefas Simples – Execute atividades como:
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        sx={
          isMobile
            ? { overflowX: "scroll", gap: "20px" }
            : { justifyContent: "space-evenly" }
        }
      >
        <IntroCard
          icon={
            <FormatAlignLeftIcon
              sx={{ fontSize: "md", color: "primary.100" }}
            />
          }
          text={"Digitar textos"}
        />
        <IntroCard
          icon={
            <AudiotrackIcon sx={{ fontSize: "md", color: "primary.100" }} />
          }
          text={"Enviar áudios"}
        />
        <IntroCard
          icon={
            <MonetizationOnIcon sx={{ fontSize: "md", color: "primary.100" }} />
          }
          text={"Consultar preços"}
        />
        <IntroCard
          icon={<GoogleIcon sx={{ fontSize: "md", color: "primary.100" }} />}
          text={"Avaliar empresas no Google"}
        />
        <IntroCard
          icon={<LanguageIcon sx={{ fontSize: "md", color: "primary.100" }} />}
          text={"Testar sites e apps"}
        />
      </Box>
      <Typography level="h2">
        Trabalhe de Qualquer Lugar – Não importa onde você esteja. Basta ter
        acesso à internet e você já pode começar a ganhar dinheiro online.
      </Typography>
    </Box>
  );
};
