import { Box, Container, Grid } from "@mui/material";
import { Website } from "./Website";
import ReactAdminScreen from "../../assets/ReactAdmin.png";
import { GitHub } from "@mui/icons-material";

const websites = [
  {
    background: ReactAdminScreen,
    title: "React Admin With Two Modes and Dashboard",
    links: [
      {
        to: "https://github.com/UchaG/React-Admin",
        icon: <GitHub />,
        color: "#ffffff",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <Box sx={{ padding: "0 0 120px 0", marginTop: "-80px" }}>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 400px))",
          }}
        >
          {websites.map((site, i) => (
            <Website key={i} {...site} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
