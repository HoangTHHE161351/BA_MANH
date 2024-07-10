import React from "react";
import { AppModal } from "../Common";
import { Box, Grid, Stack, Typography } from "@mui/material";
import AvatarDefault from "src/assets/images/user-default.png";

const DetailModal = ({ data, open, onClose }) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      modalTitleProps={{
        title: "Detail Student",
      }}
      sx={{
        "&& .MuiDialog-paper": {
          minWidth: 900,
        },
      }}
      modalContentProps={{
        content: (
          <Grid container px={"24px"} columnSpacing={5}>
            <Grid item xs={3}>
              <Box
                width={"100%"}
                height={"unset"}
                sx={{
                  aspectRatio: 1 / 1,
                  borderRadius: "100%",
                }}
              >
                <img
                  src={data?.avata || AvatarDefault}
                  alt="avatar"
                  style={{
                    fill: true,
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                />
              </Box>
              <Stack direction={"column"} spacing={0} mt={1}>
                <Typography
                  textAlign={"center"}
                  fontSize={20}
                  fontWeight={600}
                  lineHeight={"24px"}
                >
                  {data?.lastName + " " + data?.firstName}
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontSize={16}
                  fontWeight={500}
                  lineHeight={"18px"}
                >
                  STUDENT
                </Typography>
              </Stack>
            </Grid>
            <Grid container spacing={2} item xs={9}>
              <Grid item xs={6}>
                <Typography fontSize={16} fontWeight={600}>
                  First Name
                </Typography>
                <Typography fontSize={16}>{data?.firstName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={16} fontWeight={600}>
                  Last Name
                </Typography>
                <Typography fontSize={16}>{data?.lastName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={16} fontWeight={600}>
                  Email
                </Typography>
                <Typography fontSize={16}>{data?.email}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={16} fontWeight={600}>
                  Phone
                </Typography>
                <Typography fontSize={16}>{data?.phone}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={16} fontWeight={600}>
                  Dob
                </Typography>
                <Typography fontSize={16}>{data?.dob}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={16} fontWeight={600}>
                  Status
                </Typography>
                <Typography fontSize={16}>{data?.status}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize={16} fontWeight={600}>
                  Address
                </Typography>
                <Typography fontSize={16}>{data?.address}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ),
      }}
    />
  );
};

export default DetailModal;
