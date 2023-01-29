import {
    LanguageOutlined,
    SailingOutlined,
    TerminalOutlined,
} from "@mui/icons-material";
import { Container, Divider, Stack, useMediaQuery } from "@mui/material";
import { Skill } from "./skill";

const data = [
    {
        icon: <LanguageOutlined />,
        title: "Languages",
        description: "Languages I Speak:",
        skills: ["English", "Russian", "Georgian", "Ukrainian"],
    },
    {
        icon: <TerminalOutlined />,
        title: "Development",
        description: "Web Development Skills:",
        skills: [
            "ReactJS",
            "Redux",
            "Javascript",
            "HTML & CSS",
            "GIT",
            "Python",
            "Node.js",
            "MongoDB",
            "PHP",
        ],
    },
    {
        icon: <SailingOutlined />,
        title: "Hobbies",
        description: "I'm into:",
        skills: ["Business", "Football", "Boxing", "Chess"],
    },
];

const Skills = () => {
    const isMd = useMediaQuery("(min-width: 800px)");

    return (
        <Container
            sx={{
                marginTop: "-80px",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                border: "1px solid #e9e9e9",
            }}
        >
            <Stack
                display="flex"
                direction={isMd ? "row" : "column"}
                divider={<Divider orientation="vertical" flexItem />}
            >
                {data.map((skill, i) => (
                    <Skill key={i} {...skill} />
                ))}
            </Stack>
        </Container>
    );
};

export default Skills;
