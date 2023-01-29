import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Social } from "../../components/Social";

const buttons = [
    { to: "https://www.linkedin.com/in/ucha-gasviani-50aa77217/", icon: <LinkedIn /> },
    { to: "mailto:u.gasviani@gmail.com", icon: <Email /> },
    { to: "https://github.com/UchaG", icon: <GitHub /> },
];

export const Socials = () => {
    return (
        <Stack direction="row" spacing={3} alignItems="center" sx={{ width: "fit-content" }}>
            {buttons.map((social, i) => (
                <Social key={i} {...social} color="#ffffff" />
            ))}
        </Stack>
    );
};
