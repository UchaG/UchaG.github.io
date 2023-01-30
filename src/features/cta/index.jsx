import { ChatOutlined } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <Container sx={{ padding: "120px 14px" }}>
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant="h3"
                    fontWeight="600"
                    sx={{ marginBottom: "30px" }}
                >
                    Interested in collaborating with me?
                </Typography>
                <Typography variant="h3" sx={{ marginBottom: "45px" }}>
                    I’m always open to discussing job or partnership
                    opportunities.
                </Typography>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" sx={{ fontSize: "22px" }}>
                        <ChatOutlined sx={{ fontSize: "inherit" }} />
                        <Typography
                            sx={{
                                fontSize: "inherit",
                                marginLeft: "10px",
                                textDecoration: "none",
                            }}
                        >
                            CONTACT
                        </Typography>
                    </Button>
                </Link>
            </Stack>
        </Container>
    );
};

export default CTA;
