import {
  Box,
  Card,
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GoogleIcon from "@mui/icons-material/Google";
import LanguageIcon from "@mui/icons-material/Language";
import { IntroCard } from "./IntroCard";

export const Intro = () => {
  return (
    <Box
      width={"90%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Typography level="h1" sx={{ color: "primary.100" }}>
        O Que Você Vai Aprender Neste eBook?
      </Typography>
      <Typography level="h2" sx={{ color: "text.primary" }}>
        Tarefas Simples – Execute atividades como:
      </Typography>
      <IntroCard
        icon={
          <FormatAlignLeftIcon sx={{ fontSize: "md", color: "primary.100" }} />
        }
        text={"Digitar textos"}
      />
      <Typography level="h2">
        Trabalhe de Qualquer Lugar – Não importa onde você esteja. Basta ter
        acesso à internet e você já pode começar a ganhar dinheiro online.
      </Typography>
    </Box>
  );
};

{
  /*
          <p></p>

           <AudiotrackIcon sx={{ fontSize: "md", color: "primary.100" }} />
          <p>Enviar áudios</p>

          <MonetizationOnIcon sx={{ fontSize: "md", color: "primary.100" }} />
          <p>Consultar preços</p>

          <GoogleIcon sx={{ fontSize: "md", color: "primary.100" }} />
          <p>Avaliar empresas no Google</p>

           <LanguageIcon sx={{ fontSize: "md", color: "primary.100" }} />
          <p>Testar sites e apps</p>
          */
}
