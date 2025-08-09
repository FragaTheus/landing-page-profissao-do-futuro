import { Box } from "@mui/joy";

interface ISectionLayoutProp {
  children: React.ReactNode;
}

export const SectionLayout: React.FC<ISectionLayoutProp> = ({ children }) => {
  return (
    <Box
      id="section-main-box"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100vw"}
      minHeight={"80svh"}
    >
      {children}
    </Box>
  );
};
