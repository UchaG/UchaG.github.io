import { Avatar, Box, Container, Typography, SvgIcon } from "@mui/material";
import DeveloperSvg from "../../assets/Developer.svg";
import AvatarImg from "../../assets/Avatar.jpg";

const Welcome = () => {
  return (
    <Container sx={{ paddingTop: "120px" }}>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Avatar
          alt="Avatar"
          src={AvatarImg}
          sx={{ width: 200, height: 200, marginBottom: "20px" }}
        />
        <Typography variant="h1" sx={{ fontWeight: 600, marginBottom: "20px" }}>
          Web Engineer
        </Typography>
        <Typography variant="h4">
          I design and code beautifully simple things, and I love what I do.
        </Typography>
        <img
          alt="Developer"
          src={DeveloperSvg}
          style={{ width: 600, marginTop: "100px", maxWidth: "100%" }}
        />
      </Box>
    </Container>
  );
};

export default Welcome;
