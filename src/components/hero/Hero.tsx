import { Button, Card, CardContent, CardCover, Typography } from "@mui/joy";
import { usePayContext } from "../../contexts/payment/ToPaymentContext";

export const Hero = () => {
  const {toLink} = usePayContext();
  return (
    <Card sx={{ width: "96%", height: "78svh", display: "flex" }}>
      <CardCover
        sx={{
          backgroundImage: "url(hero-img.jpg)",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          filter: "brightness(0.2)",
        }}
      />
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          level="h1"
          textAlign={"center"}
          sx={{ color: "primary.100" }}
        >
          Quanto vale sua liberdade financeira?
        </Typography>
        <Typography level="h2" textAlign={"center"} sx={{ color: "text.primary" }}>
          Você sabia que é possível ganhar dinheiro na internet sem precisar
          vender nada, aparecer em vídeos ou ter um produto físico?
        </Typography>
        <Typography level="h2" textAlign={"center"} sx={{ color: "text.primary",  gap: "10px" }}>
          DESCUBRA <Typography sx={{color: "text.secondary"}}>APLICATIVOS SECRETOS</Typography> QUE PAGAM DE 
          <Typography sx={{color: "text.secondary"}}> R$100 </Typography> A 
          <Typography sx={{color: "text.secondary"}}> R$500 </Typography> POR DIA PARA VOCÊ DIGITAR TEXTO E GRAVAR AUDIO!
        </Typography>
        <Button onClick={()=>toLink()} sx={{ mt: "30px" }}>
          <Typography level="h2" sx={{ color: "text.primary" }}>
            Comece agora
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};
