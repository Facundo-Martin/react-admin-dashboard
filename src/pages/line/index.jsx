import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import PageWrapper from "../../components/PageWrapper";

const Line = () => {
  return (
    <PageWrapper pageTitle="Line Chart" pageSubtitle="Simple Line Chart">
      <Box height="75vh">
        <LineChart />
      </Box>
    </PageWrapper>
  );
};

export default Line;
