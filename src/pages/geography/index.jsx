import { Box } from "@mui/material";
import GeoChart from "../../components/GeoChart";
import PageWrapper from "../../components/PageWrapper";

const Geo = () => {
  return (
    <PageWrapper pageTitle="Geo Chart" pageSubtitle="Simple Geo Chart">
      <Box height="75vh">
        <GeoChart />
      </Box>
    </PageWrapper>
  );
};

export default Geo;
