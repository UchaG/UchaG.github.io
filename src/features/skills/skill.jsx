import { Box, Stack, Typography } from "@mui/material";
import { colors } from "../../theme";

export const Skill = ({ icon, title, description, skills }) => {
    return (
        <Stack sx={{ alignItems: "center", width: "100%", padding: "60px 0" }}>
            <Box
                sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    backgroundColor: colors.primary[400],
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "& > svg": {
                        fontSize: "40px",
                    },
                }}>
                {icon}
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 600, marginTop: "20px" }}>
                {title}
            </Typography>
            <Typography sx={{ marginTop: "10px", fontSize: "16px", color: colors.primary[400] }}>{description}</Typography>
            <Box sx={{ textAlign: "center", marginTop: "30px" }}>
                {skills.map((skill, i) => (
                    <Typography key={i} sx={{ marginTop: "15px", fontSize: "18px" }}>
                        {skill}
                    </Typography>
                ))}
            </Box>
        </Stack>
    );
};
