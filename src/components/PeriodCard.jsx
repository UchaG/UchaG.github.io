import { Stack, Typography, Box, List, ListItem } from "@mui/material";

export const PeriodCard = ({ title, period, description }) => {
    return (
        <Box sx={{ width: "100%", marginTop: "20px" }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h3" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="h4" color="primary">
                    {period}
                </Typography>
            </Stack>
            {typeof description !== "string" ? (
                <List sx={{ fontSize: "18px" }}>
                    {description.map((item, i) => (
                        <ListItem key={i}>{item}</ListItem>
                    ))}
                </List>
            ) : (
                <Typography sx={{ marginTop: "20px", fontSize: "18px" }}>{description}</Typography>
            )}
        </Box>
    );
};
