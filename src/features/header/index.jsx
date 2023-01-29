import { KeyboardReturn } from "@mui/icons-material";
import { Container, Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Header = ({ isContact = false }) => {
  return (
    <header>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "30px 0" }}
        >
          <Box>
            <Link to="/">
              <img
                alt="Avatar"
                src={Logo}
                style={{ width: "auto", height: "60px" }}
              />
            </Link>
          </Box>

          {!isContact ? (
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "18px",
                  borderRadius: "24px",
                  height: "fit-content",
                }}
              >
                CONTACT
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <KeyboardReturn color="primary" />
            </Link>
          )}
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
