import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../theme";

export const InfoBlock = ({ isColored = false, title, description }) => {
    return (
        <Box sx={{ backgroundColor: isColored ? colors.primary[500] : null }}>
            <Container>
                <Stack direction="column" alignItems="center" sx={{ padding: "120px 0", width: 700, maxWidth: "100%", margin: "0 auto" }}>
                    <Typography variant="h2" color={isColored ? "#ffffff" : null} sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                        {title}
                    </Typography>
                    <Typography color={isColored ? "#ffffff" : null} sx={{ fontSize: 20, textAlign: "center" }}>
                        {description}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};
