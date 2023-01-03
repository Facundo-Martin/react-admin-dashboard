import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import PageWrapper from "../../components/PageWrapper";

const Pie = () => {
  return (
    <PageWrapper pageTitle="Pie Chart" pageSubtitle="Simple Pie Chart">
      <Box height="75vh">
        <PieChart />
      </Box>
    </PageWrapper>
  );
};

export default Pie;
