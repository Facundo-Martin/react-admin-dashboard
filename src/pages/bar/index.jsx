import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import PageWrapper from "../../components/PageWrapper";

const Bar = () => {
  return (
    <PageWrapper pageTitle="Bar Chart" pageSubtitle="Simple Bar Chart">
      <Box height="75vh">
        <BarChart />
      </Box>
    </PageWrapper>
  );
};

export default Bar;
