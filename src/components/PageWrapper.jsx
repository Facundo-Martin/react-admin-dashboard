import React from "react";

const PageWrapper = ({ pageTitle, pageSubtitle, children }) => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
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
