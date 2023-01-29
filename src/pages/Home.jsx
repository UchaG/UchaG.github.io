import { Box, Divider } from "@mui/material";
import { InfoBlock } from "../components/InfoBlock";
import CTA from "../features/cta";
import Education from "../features/education";
import Experience from "../features/experience";
import Footer from "../features/footer";
import Header from "../features/header";
// import Portfolio from "../features/portfolio";
import Skills from "../features/skills";
import Welcome from "../features/welcome";

export const Home = () => {
    return (
        <Box>
            <Header />
            <Welcome />
            <InfoBlock
                isColored={true}
                title="Hi, I’m Ucha. Nice to meet you."
                description={
                    "Experienced JavaScript Developer with 3 years in the industry. Capable of working with a variety of technology and software solutions, but I am an advanced React developer, with backend experience (NextJs, MongoDB). Ready to be a leader, recognize and solve problems. I can be creative in my work, but at the same time I appreciate punctuality and diligence. Ready to relocate."
                }
            />
            <Skills />
            <Experience />
            <Divider />
            <Education />
            {/* <InfoBlock
        isColored={true}
        title="My Recent Work"
        description={"Here are a few past projects I've worked on."}
      />
      <Portfolio /> */}
            <Divider />
            <CTA />
            <Footer />
        </Box>
    );
};
