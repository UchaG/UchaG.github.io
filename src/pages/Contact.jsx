import { Box } from "@mui/material";
import ContactForm from "../features/contact-form";
import Header from "../features/header";

export const Contact = () => {
  return (
    <Box>
      <Header isContact={true} />
      <ContactForm />
    </Box>
  );
};
