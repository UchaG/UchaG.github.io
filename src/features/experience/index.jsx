import { WorkOutlined } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { PeriodCard } from "../../components/PeriodCard";

const data = [
    {
        title: "Junior React Developer at Samsiani, Tbilisi",
        period: "May 2020 — February 2021",
        description: ["• Developed various kinds of web applications on React", "• Learned to work in a team", "• Improved knowledge of UI/UX", "• Learned the basics of bootstrapping"],
    },
    {
        title: "React Developer at Gravitec, Odessa",
        period: "April 2021 — Present",
        description: [
            "• Maintained old company products ",
            "• Developed several projects from scratch under my supervision ",
            "• Mentored junior employee",
            "• Created a product that gained 16K users in a week ",
            "• Gained experience in Backend development (NextJs, NodeJs, MongoDB)",
        ],
    },
];

const Experience = () => {
    return (
        <Box sx={{ padding: "120px 0" }}>
            <Container>
                <Box sx={{ display: "flex", alignItem: "center", justifyContent: "center", marginBottom: "30px" }}>
                    <WorkOutlined color="primary" sx={{ fontSize: "40px" }} />
                    <Typography variant="h1" sx={{ marginLeft: "20px" }}>
                        EMPLOYMENT HISTORY
                    </Typography>
                </Box>
                {data.map((item, i) => (
                    <PeriodCard key={i} {...item} />
                ))}
            </Container>
        </Box>
    );
};

export default Experience;
