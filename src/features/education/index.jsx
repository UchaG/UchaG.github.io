import { SchoolOutlined } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { PeriodCard } from "../../components/PeriodCard";

const data = [
    {
        title: "Full secondary education, Primorsky liceum, Odessa",
        period: "September 2013 — May 2017",
        description: "Completed secondary education at the Faculty of Economics.",
    },
    {
        title: "Bachelor, Odessа Polytechnic National University, Odessa",
        period: "September 2017 — May 2021",
        description: "Graduated with a bachelor's degree",
    },
];

const Education = () => {
    return (
        <Box sx={{ padding: "120px 0" }}>
            <Container>
                <Box sx={{ display: "flex", alignItem: "center", justifyContent: "center", marginBottom: "30px" }}>
                    <SchoolOutlined color="primary" sx={{ fontSize: "40px" }} />
                    <Typography variant="h1" sx={{ marginLeft: "20px" }}>
                        EDUCATION
                    </Typography>
                </Box>
                {data.map((item, i) => (
                    <PeriodCard key={i} {...item} />
                ))}
            </Container>
        </Box>
    );
};

export default Education;
