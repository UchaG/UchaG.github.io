import { Container, Stack, Typography } from "@mui/material";
import { colors } from "../../theme";
import { Socials } from "./Socials";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: colors.primary[500],
        padding: "50px 0 30px",
      }}
    >
      <Container>
        <Stack alignItems="center">
          <Socials />
          <Typography
            variant="h6"
            color="#ffffff"
            sx={{ marginTop: "40px", opacity: 0.9 }}
          >
            Built by Ucha Gasviani | 2023
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
