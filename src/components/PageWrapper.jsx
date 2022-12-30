import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const PageWrapper = ({ pageTitle, pageSubtitle, children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box p={2}>
      <Box mb="30px">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {pageTitle || "New Page"}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {pageSubtitle || "New Subtitle"}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default PageWrapper;
