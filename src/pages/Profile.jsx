import { Box, Container, Tab } from "@mui/material";
import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import InfoUpdate from "src/components/sn-profile/InfoUpdate";
import { ChangePasswordForm } from "src/components/sn-profile";

const Profile = () => {
  const [value, setValue] = useState(`1`);

  return (
    <Container
      sx={{
        bgcolor: "common.white",
        borderRadius: "6px",
        border: "1px solid",
        borderColor: "grey.300",
        py: "20px",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            textColor="inherit"
            indicatorColor="primary"
            aria-label="lab API tabs example"
          >
            <Tab label="Thông tin chung" value="1" />
            <Tab label="Đổi mật khẩu" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <InfoUpdate />
        </TabPanel>
        <TabPanel value="2">
          <ChangePasswordForm />
        </TabPanel>
      </TabContext>
    </Container>
  );
};

export default Profile;
