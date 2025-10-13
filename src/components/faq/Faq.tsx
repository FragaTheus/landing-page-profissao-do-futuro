import { Box, Button } from "@mui/joy";
import { ItemLayout } from "../transformar-section/ItemLayout";
import { Typography } from "@mui/joy";

export const Faq = ()=>{
    return(
        <Box
      width={"100%"}
      minHeight={"80svh"}
      bgcolor={"#121212"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"15px"}
    >
      <ItemLayout
        title={"Perguntas Frequentes:"}
        subtitle={"Preciso de alguma experiência para começar?"}
        text={"Não!"}
        text1={"O eBook foi feito para iniciantes. Qualquer pessoa pode seguir os passos e começar a ganhar dinheiro imediatamente."}
        
      />
      <ItemLayout
        subtitle={"Posso começar a ganhar dinheiro hoje? "}
        text={"Sim!"}
        text1={"Assim que adquirir o eBook, você já pode colocar em prática as dicas e começar a realizar as primeiras tarefas."}
     
      />
      <ItemLayout
        subtitle={"O pagamento é seguro?"}
        text={"Sim!"}  
        text1={"Todos os pagamentos são processados por plataformas seguras, garantindo a sua proteção."}
      />
      <Box width={"90%"} display={"flex"} flexDirection={"column"}>
<       Typography level="h1" sx ={{color: "text.secondary"}}>Agora é com você!</Typography>
        <Typography level="h2">
            O primeiro passo para<Typography sx={{color: "text.secondary"}}> mudar </Typography>sua
            <Typography sx={{color: "text.secondary"}}> situação financeira </Typography>
            está a
            <Typography sx={{color: "text.secondary"}}> um clique </Typography>de distância.
        </Typography>
        <Typography level="h2">Não deixe essa <Typography sx={{color: "text.secondary"}}> oportunidade </Typography>passar!</Typography>
      </Box>
    </Box>
    );
}