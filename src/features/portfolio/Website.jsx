import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Social } from "../../components/Social";
import { colors } from "../../theme";

export const Website = ({ background, title, links }) => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = () => setIsHover(true)
    const onMouseLeave = () => setIsHover(false)

    return (
        <Box
            sx={{
                borderRadius: "10px",
                width: "100%",
                transition: "all ease 0.2s",
                position: "relative",
                boxShadow: "0 0 3px 0 #e9e9e9"
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img alt="background" src={background} style={{ padding: "0", borderRadius: "inherit", width: "100%", height: "100%" }} />
            <Box
                sx={{
                    transition: "all ease 0.2s",
                    backgroundColor: colors.primary[500],
                    borderRadius: "inherit",
                    opacity: isHover ? 0.8 : 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "#ffffff",
                    textAlign: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}>
                <Typography variant="h5">{title}</Typography>
                <Box sx={{ marginTop: "10px" }}>
                    {links.map((link, i) => (
                        <Social key={i} {...link} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
