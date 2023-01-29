import { IconButton } from "@mui/material";

export const Social = ({ to = "#", icon, color = "primary" }) => {
    return (
        <a href={to} target="_blank" rel="noreferrer">
            <IconButton
                sx={{
                    width: 45,
                    height: 45,
                    border: `2px solid ${color}`,
                    color: color,
                    "& > svg": {
                        fontSize: "26px",
                    },
                    "&:hover": {
                        backgroundColor: color,
                        color: "unset",
                    },
                }}>
                {icon}
            </IconButton>
        </a>
    );
};
