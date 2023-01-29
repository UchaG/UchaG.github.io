import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { Form } from "./Form";

const ContactForm = () => {
    const [isSubmited, setIsSubmited] = useState(false);

    return (
        <Box>
            <Container
                sx={{ width: "700px", maxWidth: "100%", marginBottom: "40px" }}
            >
                {isSubmited ? (
                    <Typography
                        variant="h1"
                        textAlign="center"
                        sx={{ marginTop: "50px" }}
                    >
                        Thank you for your message!
                    </Typography>
                ) : (
                    <>
                        <Typography
                            variant="h1"
                            sx={{ marginBottom: "40px", textAlign: "center" }}
                        >
                            Contact me
                        </Typography>
                        <Form setIsSubmited={setIsSubmited} />
                    </>
                )}
            </Container>
        </Box>
    );
};

export default ContactForm;
