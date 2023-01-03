import { Box, useTheme } from "@mui/material";
import GeoChart from "../../components/GeoChart";
import { tokens } from "../../theme";
import PageWrapper from "../../components/PageWrapper";


const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
      <PageWrapper pageTitle="Geography" pageSubtitle="Simple Geography Chart">

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </PageWrapper>
  );
};

export default Geography;