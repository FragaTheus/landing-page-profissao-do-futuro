import { Box } from "@mui/joy";
import { ItemLayout } from "./ItemLayout";

export const Transformar = () => {
  return (
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
        title={"Por Que Este eBook Vai Transformar Sua Vida?"}
        subtitle={"Prático e Simples:"}
        text={"Você não precisa de experiência ou habilidades especiais."}
        text1={
          "Com as dicas e guias passo a passo, você aprenderá tudo o que precisa para começar a ganhar hoje mesmo."
        }
      />
      <ItemLayout
        subtitle={"Renda Extra ou Principal:"}
        text={"O que você ganha depende de quanto tempo se dedica. "}
        text1={
          " Faça tarefas no seu tempo livre ou se dedique mais para aumentar sua renda."
        }
      />
      <ItemLayout
        subtitle={"Sem Necessidade de Vender ou Aparecer: "}
        text={
          "Não há necessidade de criar produtos, vender nada ou mostrar o seu rosto."
        }
        text1={"Tudo é feito a partir de tarefas simples e eficazes."}
      />
      <ItemLayout
        subtitle={"Comprovado e Funcional:"}
        text={
          "As plataformas que você aprenderá a utilizar são testadas e confiáveis."
        }
        text1={
          "Você estará utilizando métodos comprovados para ganhar dinheiro de forma real e contínua."
        }
      />
      <ItemLayout
            title={"O Que Você Vai Receber:"}
            subtitle={"Acesso Imediato ao eBook:"}
            text={"Após a compra, você receberá o eBook completo em formato PDF, pronto para ser lido e seguido no seu ritmo."}
          />
          <ItemLayout
            subtitle={"Guias Passo a Passo:"}
            text={"Ensinamos como se cadastrar, começar a ganhar dinheiro e como melhorar seus ganhos com dicas práticas."}
            
          />
          <ItemLayout
            subtitle={"Acesso a Tarefas Reais e Plataformas Confiáveis:"}
            text={
              "Você aprenderá sobre sites e aplicativos seguros para começar a executar tarefas e ser pago por isso!"
            }
          />
    </Box>
  );
};
