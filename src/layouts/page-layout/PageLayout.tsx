import { Box } from "@mui/joy";
import { Header } from "../../components/header/Header";
import { SectionLayout } from "../section-layout/SectionLayout";
import { Hero } from "../../components/hero/Hero";
import { Intro } from "../../components/intro/Intro";

export const PageLayout = () => {
  return (
    <Box
      id="main-box"
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box id="header-box" width={"100%"} height={"10svh"}>
        <Header />
      </Box>
      <Box id="body-box" bgcolor={"background.body"}>
        <SectionLayout>
          <Hero />
        </SectionLayout>
        <SectionLayout>
          <Intro />
        </SectionLayout>
      </Box>
    </Box>
  );
};
